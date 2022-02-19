import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Form, FormInstance, Input, Table } from 'antd'
import RowStatus from './RowStatus'
import { useIntl } from 'react-intl'

interface EditableRowProps {
  index: number
}
export const EditableContext = React.createContext<FormInstance<any> | null>(
  null
)
export const EditableRow: React.FC<EditableRowProps> = ({
  index,
  ...props
}) => {
  const [form] = Form.useForm()

  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  )
}

interface EditableCellProps {
  title: React.ReactNode
  editable: boolean
  children: React.ReactNode
  dataIndex: any
  record: any
  handleSave: (record: any) => void
  handleRemove: (record: any) => void
  handleAdd: () => void
}
export const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  handleRemove,
  handleAdd,
  ...restProps
}) => {
  const form = useContext(EditableContext)!
  const { formatMessage } = useIntl()
  const t = (id) => formatMessage({ id })

  useEffect(() => {
    if (record && record.status !== RowStatus.CREATE && form) {
      form.setFieldsValue({ [dataIndex]: record[dataIndex] })
    }
  }, [])

  const onSave = () => {
    const values = form.getFieldsValue()
    handleSave({ ...record, ...values })
  }
  const renderActionColumn = () => {
    if (record.status === RowStatus.CREATE)
      return (
        <Button onClick={onSave} type='link'>
          {t('buttons.add')}
        </Button>
      )
    else
      return (
        <>
          <Button onClick={onSave} type='link'>
            {t('buttons.save')}
          </Button>
          <Button onClick={() => handleRemove(record)} type='link'>
            {t('buttons.delete')}
          </Button>
        </>
      )
  }

  let childNode = children

  if (dataIndex === 'action') {
    childNode = renderActionColumn()
  } else if (editable) {
    const events = { onPressEnter: onSave }
    const inputComponent = React.cloneElement(children[1], events)

    childNode = (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        {inputComponent}
      </Form.Item>
    )
  }

  return <td {...restProps}>{childNode}</td>
}

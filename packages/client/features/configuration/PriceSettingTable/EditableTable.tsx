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
}
export const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  handleRemove,
  ...restProps
}) => {
  const inputRef = useRef<Input>(null)
  const form = useContext(EditableContext)!
  const { formatMessage } = useIntl()
  const t = (id) => formatMessage({ id })

  useEffect(() => {
    if (record && record.status !== RowStatus.CREATE && form) {
      form.setFieldsValue({ [dataIndex]: record[dataIndex] })
    }
  }, [])

  const onPressEnter = async () => {
    try {
      const values = await form.getFieldsValue()

      handleSave({ ...record, ...values })
    } catch (errInfo) {
      console.log('Save failed:', errInfo)
    }
  }

  const renderActionColumn = () => {
    if (record.status === RowStatus.CREATE)
      return (
        <Button
          onClick={() => {
            const values = form.getFieldsValue()
            handleSave({ ...record, ...values })
          }}
          type='link'
        >
          {t('buttons.save')}
        </Button>
      )
    else
      return (
        <Button onClick={() => handleRemove(record)} type='link'>
          {t('buttons.delete')}
        </Button>
      )
  }

  let childNode = children

  if (dataIndex === 'action') {
    childNode = renderActionColumn()
  } else if (editable) {
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
        <Input ref={inputRef} onPressEnter={onPressEnter} />
      </Form.Item>
    )
  }

  return <td {...restProps}>{childNode}</td>
}

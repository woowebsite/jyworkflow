import { useIntl } from 'react-intl'

import Button from 'components/Button'
import Form from 'components/Form'
import Input from 'components/Input'

import useTranslate from 'hooks/useTranslate'

const { Item, useForm } = Form
const { Group } = Button

const QuickForm = ({ values, onSave, onCancel }) => {
  const { formatMessage } = useIntl()
  const t = (id, values?) => formatMessage({ id }, values)
  // DEFINE
  const [form] = useForm()

  // EVENTS
  const handleFinish = () => {
    form
      .validateFields()
      .then((values) => {
        onSave(values)
      })
      .catch((errorInfo) => {
        console.log('Error: ', errorInfo)
      })
  }

  return (
    <Form
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 6 }}
      initialValues={values}
      onFinish={handleFinish}
      name='basic'
      form={form}
      className='no-space-form'
    >
      <Item name='id' hidden>
        <Input />
      </Item>
      <Item
        label={t('userTable.columns.name')}
        name='name'
        rules={[
          {
            required: true,
            message: useTranslate('validator.required', {
              field: 'userTable.columns.name',
            }),
          },
        ]}
      >
        <Input />
      </Item>

      <Item
        label={t('userTable.columns.email')}
        name='email'
        rules={[
          {
            required: true,
            message: useTranslate('validator.required', {
              field: 'userTable.columns.email',
            }),
          },
        ]}
      >
        <Input />
      </Item>

      <Item>
        <>
          <Button type='primary' className='mr-2' htmlType='submit'>
            {t('buttons.save')}
          </Button>
          <Button htmlType='button' type='default' onClick={onCancel}>
            {t('buttons.cancel')}
          </Button>
        </>
      </Item>
    </Form>
  )
}

export default QuickForm

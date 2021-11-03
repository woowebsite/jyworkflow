import { useIntl } from 'react-intl';

import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Input';

const { Item, useForm } = Form;
const { Group } = Button;

const QuickForm = ({ values, onSave, onCancel }) => {
  const { formatMessage } = useIntl();
  const t = (id, values?) => formatMessage({ id }, values);
  // DEFINE
  const [form] = useForm();

  // EVENTS
  const handleFinish = () => {
    form
      .validateFields()
      .then(values => {
        onSave(values);
      })
      .catch(errorInfo => {
        console.log('Error: ', errorInfo);
      });
  };

  return (
    <Form
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 6 }}
      initialValues={values}
      onFinish={handleFinish}
      name="basic"
      form={form}
      className="no-space-form"
    >
      <Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Item>

      <Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input />
      </Item>

      <Item>
        <Group>
          <Button type="primary" className="mr-2" htmlType="submit">
            {t('buttons.save')}
          </Button>
          <Button htmlType="button" type="default" onClick={onCancel}>
            {t('buttons.cancel')}
          </Button>
        </Group>
      </Item>
    </Form>
  );
};

export default QuickForm;

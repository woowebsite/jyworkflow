import { useIntl } from 'react-intl';

import Form from "components/Form";
import Input from "components/Input";
import Button from "components/Button";

import useTranslate from 'hooks/useTranslate';

const { Item, useForm } = Form;

const QuickForm = ({ values, onSave }) => {
  // DEFINE
  const [form] = useForm();
  const { formatMessage } = useIntl();
  const t = (id, values?) => formatMessage({ id }, values);

  // EVENTS
  const handleFinish = () => {
    form
      .validateFields()
      .then((values) => {
        onSave(values);
      })
      .catch((errorInfo) => {
        console.log("Error: ", errorInfo);
      });
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 8 }}
      initialValues={values}
      onFinish={handleFinish}
      name="basic"
      form={form}
    >
      <Item
        label={t('productBaseTable.columns.title')}
        name="title"
        rules={[
          {
            required: true,
            message: useTranslate('validator.required', {
              field: 'productBaseTable.columns.title',
            }),
          },
        ]}
      >
        <Input />
      </Item>

      <Item>
        <Button type="primary" htmlType="submit">
          {t('buttons.save')}
        </Button>
      </Item>
    </Form>
  );
};

export default QuickForm;

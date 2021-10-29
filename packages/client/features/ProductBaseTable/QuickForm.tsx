import Form from "components/Form";
import Input from "components/Input";
import Button from "components/Button";

const { Item, useForm } = Form;

const QuickForm = ({ values, onSave }) => {
  // DEFINE
  const [form] = useForm();

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
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Item>

      <Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input />
      </Item>

      <Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default QuickForm;

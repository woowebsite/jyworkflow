import Form from "components/Form";
import Input from "components/Input";
import Button from "components/Button";

const { Item, useForm } = Form;

const FilterForm = ({ values, onFilter }) => {
  // DEFINE
  const [form] = useForm();

  // EVENTS
  const handleFinish = () => {
    form
      .validateFields()
      .then((values) => {
        let queries = values;
        if (values.name || !!!values.name)
          queries.name = `%${values.name}%`;
        onFilter(queries);
      })
      .catch((errorInfo) => {
        console.log('Error: ', errorInfo);
      });
  };

  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={values}
      layout='inline'
      onFinish={handleFinish}
      name='basic'
      form={form}
    >
      <Item label='Name' name='name'>
        <Input />
      </Item>

      <Item label='Email' name='email'>
        <Input />
      </Item>

      <Item>
        <Button type='primary' htmlType='submit'>
          Filter
        </Button>
      </Item>
    </Form>
  );
};

export default FilterForm;

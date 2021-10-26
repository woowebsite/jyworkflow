import Form from "components/Form";
import Input from "components/Input";

const { Item } = Form;

const ContactForm = ({ form, initialValues, onSubmit }) => {
  // EVENTS
  const handleFinish = () => {
    form
      .validateFields()
      .then(values => {
        let queries = values;
        if (values.name || !!!values.name) queries.name = `%${values.name}%`;
        onSubmit(queries);
      })
      .catch(errorInfo => {
        console.log('Error: ', errorInfo);
      });
  };
  return (
    <Form form={form} initialValues={initialValues} onFinish={handleFinish}>
      <Item name="abc">
        <Input />
      </Item>
    </Form>
  );
};

export default ContactForm;

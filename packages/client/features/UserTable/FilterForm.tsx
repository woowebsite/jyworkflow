import { Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import Form from 'components/Form';
import Input from 'components/Input';
import Button from 'components/Button';

const { Item, useForm } = Form;

const FilterForm = ({ values, onFilter }) => {
  // DEFINE
  const [form] = useForm();

  // EVENTS
  const handleFinish = () => {
    form
      .validateFields()
      .then(values => {
        let queries = values;
        if (typeof values.name !== 'undefined' && values.name.length) {
          queries.name = `%${values.name}%`;
        }
        if (typeof values.email !== 'undefined' && values.email.length) {
          queries.email = `%${values.email}%`;
        }
        onFilter(queries);
      })
      .catch(errorInfo => {
        console.log('Error: ', errorInfo);
      });
  };

  return (
    <div className="filter-form">
      <Form
        initialValues={values}
        onFinish={handleFinish}
        name="basic"
        form={form}
        className="mb-3 no-space-form"
      >
        <Row gutter={32}>
          <Col span={6}>
            <Item name="name">
              <Input placeholder="Nhập tên" />
            </Item>
          </Col>
          <Col span={6}>
            <Item name="email">
              <Input placeholder="Nhập email" />
            </Item>
          </Col>
          <Col span={6}>
            <Item>
              <Button icon={<SearchOutlined />} htmlType="submit">
                Tìm kiếm
              </Button>
            </Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FilterForm;

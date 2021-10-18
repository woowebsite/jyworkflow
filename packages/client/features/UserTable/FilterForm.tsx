import { SearchOutlined } from '@ant-design/icons';

import Form from 'components/Form';
import Input from 'components/Input';
import Button from 'components/Button';

import style from './style.module.scss';

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
    <div className={style['filter-form']}>
      <Form
        initialValues={values}
        layout="inline"
        onFinish={handleFinish}
        name="basic"
        form={form}
        labelAlign="left"
        
      >
        <Item name="name">
          <Input placeholder="Nhập tên" />
        </Item>

        <Item name="email">
          <Input placeholder="Nhập email" />
        </Item>

        <Item>
          <Button icon={<SearchOutlined />} htmlType="submit">
            Tìm kiếm
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default FilterForm;

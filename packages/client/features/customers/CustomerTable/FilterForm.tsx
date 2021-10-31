import React from 'react';
import { Row, Col } from 'antd';
import { useIntl } from 'react-intl';
import { SearchOutlined } from '@ant-design/icons';

import CustomerType from 'models/CustomerType';

import Form from 'components/Form';
import Input from 'components/Input';
import Button from 'components/Button';
import ComboBoxEnum from 'components/ComboBoxEnum';

const { Item } = Form;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const FilterForm = ({ values, onFilter }) => {
  // DEFINE
  const [form] = Form.useForm();
  const { formatMessage } = useIntl();
  const t = (id, values?) => formatMessage({ id }, values);

  // EVENTS
  const handleFinish = () => {
    form
      .validateFields()
      .then(values => {
        let queries = values;
        if (values.name || !!!values.name) queries.name = `%${values.name}%`;
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
              <Input allowClear placeholder={t('customerTable.filter.type')} />
            </Item>
          </Col>
          <Col span={6}>
            <Item name="customerType">
              <ComboBoxEnum
                type={CustomerType}
                placeholder={t('customerTable.filter.type')}
                width={150}
                allowClear
              />
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

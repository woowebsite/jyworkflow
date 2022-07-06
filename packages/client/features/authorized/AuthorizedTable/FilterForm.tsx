import React from 'react';
import { Row, Col } from 'antd';
import { useIntl } from 'react-intl';

import Form from "components/Form";
import Button from "components/Button";
import ComboBox, { ComboBoxType } from 'components/ComboBox';

const { Item, useForm } = Form;

const FilterForm = ({ values, onFilter }) => {

  // DEFINE
  const [form] = useForm();
  const { formatMessage } = useIntl();
  const t = (id, values?) => formatMessage({ id }, values);

  // EVENTS
  const handleFinish = () => {
    form
      .validateFields()
      .then(values => {
        let queries = values;
        if (values.name) queries.name = `%${values.name}%`;
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
            <Item name="refId">
              <ComboBox
                type={ComboBoxType.Role}
                valueField="id"
                textField="name"
                placeholder="Chọn chức vụ" 
              />
            </Item>
          </Col>
          <Col span={6}>
            <Item>
              <Button htmlType="submit">
                {t('buttons.search')}
              </Button>
            </Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FilterForm;

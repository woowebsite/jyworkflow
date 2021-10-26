import React from 'react';
import { useIntl } from 'react-intl';

import CustomerType from 'models/CustomerType';

import ComboBoxEnum from 'components/ComboBoxEnum';
import Button from "components/Button";
import Form from "components/Form";
import Input from "components/Input";

const { Item } = Form;

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
    <Form
      initialValues={values}
      onFinish={handleFinish}
      layout="inline"
      name="basic"
      form={form}
      labelAlign="left"
    >
      <Item name="name">
        <Input allowClear placeholder={t('customerTable.filter.type')} />
      </Item>

      <Item name="customerType">
        <ComboBoxEnum
          type={CustomerType}
          placeholder={t('customerTable.filter.type')}
          width={150}
          allowClear
        />
      </Item>

      <Item>
        <Button type="primary" htmlType="submit">
          {t('buttons.filter')}
        </Button>
      </Item>
    </Form>
  );
};

export default FilterForm;

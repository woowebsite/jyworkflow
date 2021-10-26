import { useIntl } from 'react-intl';
import React from 'react';

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
      layout="inline"
      onFinish={handleFinish}
      name="basic"
      form={form}
      labelAlign="left"
    >
      <Item name="customerType">
        <ComboBox
          type={ComboBoxType.Role}
          valueField="id"
          textField="name"
          style={{ width: 150 }}
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

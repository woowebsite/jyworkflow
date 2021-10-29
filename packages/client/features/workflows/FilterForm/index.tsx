import React, { forwardRef, useImperativeHandle } from 'react';
import { useIntl } from 'react-intl';
import _ from 'lodash';

import Button from "components/Button";
import Form from "components/Form";
import Input from "components/Input";
import ComboBox, { ComboBoxType } from 'components/ComboBox';
import AuthorizedWrapper from 'components/AuthorizedWrapper';
import ComboBoxTaxonomy, { TaxonomyType } from 'components/ComboBoxTaxonomy';

import { fieldsToMetadata } from 'shared/metadataHelper';
import workflowAuthConfig from 'features/workflows/authorized/workflow';

const { Item, useForm } = Form;

const FilterForm = forwardRef<any, any>(({ onFilter, session }, ref) => {
  // DEFINE
  const { formatMessage } = useIntl();
  const t = id => formatMessage({ id });
  const [form] = useForm();

  // EVENTS
  useImperativeHandle(ref, () => ({
    submit: handleFinish,
    getFieldsValue
  }));

  const getFieldsValue = () => form.getFieldsValue();

  const handleFinish = () => {
    form
      .validateFields()
      .then(values => {
        let queries = values;
        if (typeof values.title !== 'undefined' && values.title.length) {
          queries.title = `%${values.title}%`;
        }

        // taxonomy fields
        if (values.taxonomies) {
          queries.taxonomies = _.values(_.pickBy(values.taxonomies));
        }

        // metadata fields
        if (values.metadata) {
          queries.metadata = fieldsToMetadata(values.metadata).map(x => ({
            key: x.key,
            value: x.value,
          }));
        }

        onFilter(queries);
      })
      .catch(errorInfo => {
        console.log('Error: ', errorInfo);
      });
  };

  return (
    <Form
      form={form}
      layout="inline"
      name="basic"
      onFinish={handleFinish}
    >
      <AuthorizedWrapper
        config={workflowAuthConfig.FilterForm}
        session={session}
      >
        <Item name={['metadata', 'employee']}>
          <ComboBox
            placeholder={t('filter.labels.employee')}
            type={ComboBoxType.Employee}
            allowClear
            textField="name"
            valueField="id"
            style={{ width: 150 }}
          />
        </Item>
      </AuthorizedWrapper>

      <AuthorizedWrapper
        config={workflowAuthConfig.FilterForm}
        session={session}
      >
        <Item data-type="object" name={['metadata', 'customer']}>
          <ComboBox
            placeholder={t('filter.labels.customer')}
            type={ComboBoxType.Customer}
            allowClear
            textField="name"
            valueField="id"
            style={{ width: 150 }}
          />
        </Item>
      </AuthorizedWrapper>

      <Item name="title">
        <Input placeholder={t('filter.labels.title')} allowClear />
      </Item>

      <Item name={['metadata', 'priority']}>
        <ComboBoxTaxonomy
          allowClear
          placeholder={t('jobTable.columns.priority')}
          type={TaxonomyType.Job_Priority}
        />
      </Item>

      <Item>
        <Button type="primary" htmlType="submit">
          {t('buttons.filter')}
        </Button>
      </Item>
    </Form>
  );
});

export default FilterForm;

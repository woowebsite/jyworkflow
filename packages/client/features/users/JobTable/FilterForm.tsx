import React from 'react';
import { useIntl } from 'react-intl';
import _ from 'lodash';

import Button from "components/Button";
import Form from "components/Form";
import Input from "components/Input";
import ComboBoxTaxonomy, { TaxonomyType } from 'components/ComboBoxTaxonomy';

import { fieldsToMetadata } from 'shared/metadataHelper';

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
        // job fields
        let queries: any = { job: values.job };
        if (
          typeof values.job.title !== 'undefined' &&
          values.job.title.length
        ) {
          queries.job.title = `%${values.title}%`;
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

        // execute
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
    >
      <Item name={['job', 'title']}>
        <Input placeholder={t('jobTable.columns.title')} allowClear />
      </Item>
      <Item name={['taxonomies', 'job_status']}>
        <ComboBoxTaxonomy
          allowClear
          type={TaxonomyType.Job_Status}
          placeholder={t('jobTable.columns.status')}
        />
      </Item>
      <Item name={['metadata', 'priority']}>
        <ComboBoxTaxonomy
          allowClear
          placeholder={t('jobTable.columns.priority')}
          type={TaxonomyType.Job_Priority}
        />
      </Item>
      <Item>
        <Button htmlType="submit">
          {t('buttons.search')}
        </Button>
      </Item>
    </Form>
  );
};

export default FilterForm;

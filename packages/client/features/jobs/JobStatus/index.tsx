import React, { useEffect, forwardRef, useImperativeHandle } from 'react';
import { useIntl } from 'react-intl';

import Form from '~/components/Form';
import TextEditable from '~/components/TextEditable';
import ComboBoxTaxonomy, { TaxonomyType } from '~/components/ComboBoxTaxonomy';
import ComboBox, { ComboBoxType } from '~/components/ComboBox';

import jobService from '~/services/jobService';
import useTranslate from '~/hooks/useTranslate';
import { fieldsToMetadata, fieldsToTaxonomies } from '~/shared/metadataHelper';

const { Item, useForm } = Form;

// utils
const JobStatusBox = forwardRef<any, any>((props, ref) => {
  const { formatMessage } = useIntl();
  const { initialValues } = props;
  const [upsertJob] = jobService.upsert();
  const t = (id, values?) => formatMessage({ id }, values);
  const [form] = useForm();

  // EFFECT
  useEffect(
    () => {
      if (initialValues) {
        formSetFields(initialValues);
      }
    },
    [initialValues]
  );

  const formSetFields = (job) => {
    form.setFields([
      // taxonomies
      {
        name: ['taxonomies', 'job_status'],
        value: job.job_status,
      },

      // metadata
      {
        name: ['metadata', 'employee'],
        value: job.employee,
      },
      {
        name: ['metadata', 'retoucher'],
        value: job.retoucher,
      },
      {
        name: ['metadata', 'leader'],
        value: job.leader,
      },
      {
        name: ['metadata', 'customer'],
        value: job.customer,
      },
      { name: ['metadata', 'priority'], value: job.priority },
    ]);
  };

  /// EVENTS
  useImperativeHandle(ref, () => ({
    submit,
    getFieldsValue,
    validateFields,
  }));

  const submit = () => {
    const { id, code } = initialValues;
    form.isFieldsTouched() &&
      form
        .validateFields()
        .then((values) => {
          // metadata fields
          const metadataFields = {
            ...values.metadata,
          };

          // taxonomies fields
          const taxonomyFields = values.taxonomies;
          // parse
          const metadata = fieldsToMetadata(metadataFields);
          const taxonomies = fieldsToTaxonomies(taxonomyFields);

          upsertJob({
            variables: { job: { id, code }, metadata, taxonomies },
          });
        })
        .catch((errorInfo) => {
          console.log('Error: ', errorInfo);
        });
  };

  const getFieldsValue = () => form.getFieldsValue();
  const validateFields = () => form.validateFields();

  const job_status = initialValues.job_status;

  const fCustomer = initialValues.metadata.find((x) => x.key === 'customer');
  const customer = fCustomer && JSON.parse(fCustomer.data);

  const fLeader = initialValues.metadata.find((x) => x.key === 'leader');
  const leader = fLeader && JSON.parse(fLeader.data);

  const fEmployee = initialValues.metadata.find((x) => x.key === 'employee');
  const employee = fEmployee && JSON.parse(fEmployee.data);

  const fretoucher = initialValues.metadata.find((x) => x.key === 'retoucher');
  const retoucher = fretoucher && JSON.parse(fretoucher.data);

  const fPriority = initialValues.metadata.find((x) => x.key === 'priority');
  const priority = fPriority
    ? JSON.parse(fPriority.data)
    : { name: 'Normal', value: 4 };

  const initialFormValues = {
    taxonomies: {
      job_status,
    },
    metadata: {
      employee,
      retoucher,
      leader,
      customer,
      priority,
    },
  };

  return (
    <>
      <Form
        form={form}
        className='status-form'
        initialValues={initialFormValues}
      >
        <Item
          name={['taxonomies', 'job_status']}
          label={t('jobStatus.label.status')}
          rules={[
            {
              required: true,
              message: useTranslate('validator.required', {
                field: 'jobStatus.label.status',
              }),
            },
          ]}
        >
          <TextEditable
            defaultValue={job_status}
            defaultText={job_status && job_status.name}
            renderComboBox={({ handleOnChange, ref, ...rest }) => (
              <ComboBoxTaxonomy
                ref={ref}
                type={TaxonomyType.Job_Status}
                labelInValue
                onChange={handleOnChange}
                {...rest}
              />
            )}
          />
        </Item>
        <Item
          name={['metadata', 'employee']}
          label={t('jobStatus.label.employee')}
          rules={[
            {
              required: true,
              message: useTranslate('validator.required', {
                field: 'jobStatus.label.employee',
              }),
            },
          ]}
        >
          <TextEditable
            defaultValue={employee}
            defaultText={employee && employee.name}
            renderComboBox={({ handleOnChange, ref, ...rest }) => (
              <ComboBox
                ref={ref}
                onChange={handleOnChange}
                textField='name'
                valueField='id'
                labelInValue
                type={ComboBoxType.Employee}
                width='200'
                {...rest}
              />
            )}
          />
        </Item>
        <Item
          name={['metadata', 'retoucher']}
          label={t('jobStatus.label.retoucher')}
          rules={[
            {
              required: true,
              message: useTranslate('validator.required', {
                field: 'jobStatus.label.retoucher',
              }),
            },
          ]}
        >
          <TextEditable
            defaultValue={retoucher}
            defaultText={retoucher && retoucher.name}
            renderComboBox={({ handleOnChange, ref, ...rest }) => (
              <ComboBox
                ref={ref}
                onChange={handleOnChange}
                textField='name'
                valueField='id'
                labelInValue
                type={ComboBoxType.Employee}
                width='200'
                {...rest}
              />
            )}
          />
        </Item>
        <Item
          name={['metadata', 'leader']}
          label={t('jobStatus.label.leader')}
          rules={[
            {
              required: true,
              message: useTranslate('validator.required', {
                field: 'jobStatus.label.leader',
              }),
            },
          ]}
        >
          <TextEditable
            defaultValue={leader}
            defaultText={leader && leader.name}
            renderComboBox={({ handleOnChange, ref, ...rest }) => (
              <ComboBox
                ref={ref}
                onChange={handleOnChange}
                textField='name'
                valueField='id'
                type={ComboBoxType.Leader}
                width='200'
                labelInValue
                {...rest}
              />
            )}
          />
        </Item>
        <Item
          name={['metadata', 'customer']}
          label={t('jobStatus.label.customer')}
          rules={[
            {
              required: true,
              message: useTranslate('validator.required', {
                field: 'jobStatus.label.customer',
              }),
            },
          ]}
        >
          <TextEditable
            defaultValue={customer}
            defaultText={customer && customer.name}
            renderComboBox={({ handleOnChange, ref, ...rest }) => (
              <ComboBox
                ref={ref}
                onChange={handleOnChange}
                textField='name'
                valueField='id'
                type={ComboBoxType.Customer}
                width='200'
                labelInValue
                {...rest}
              />
            )}
          />
        </Item>
        <Item
          name={['metadata', 'priority']}
          label={t('jobCreateform.label.priority')}
        >
          <TextEditable
            defaultValue={priority}
            defaultText={priority && priority.name}
            renderComboBox={({ handleOnChange, ref, ...rest }) => (
              <ComboBoxTaxonomy
                ref={ref}
                type={TaxonomyType.Job_Priority}
                onChange={handleOnChange}
                textField='name'
                valueField='id'
                labelInValue
                width='200'
                {...rest}
              />
            )}
          />
        </Item>
      </Form>
    </>
  );
});

export default JobStatusBox;

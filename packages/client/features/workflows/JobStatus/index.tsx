import React, { useEffect, forwardRef, useImperativeHandle } from 'react';
import { useIntl } from 'react-intl';

// graphql
import TextEditable from '~/components/TextEditable';
import Form from "components/Form";
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
    [initialValues],
  );

  const formSetFields = job => {
    form.setFields([
      // metadata
      {
        name: ['metadata', 'employee'],
        value: job.employee,
      },
      {
        name: ['metadata', 'leader'],
        value: job.leader,
      },
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
    form
      .validateFields()
      .then(values => {
        // metadata fields
        const metadataFields = {
          ...values.metadata,
        };

        // parse
        const metadata = fieldsToMetadata(metadataFields);

        upsertJob({
          variables: { job: { id, code }, metadata, taxonomies: [] },
        });
      })
      .catch(errorInfo => {
        console.log('Error: ', errorInfo);
      });
  };

  const getFieldsValue = () => form.getFieldsValue();
  const validateFields = () => form.validateFields();

  const fLeader = initialValues.metadata.find(x => x.key === 'leader');
  const leader = fLeader && JSON.parse(fLeader.data);

  const fEmployee = initialValues.metadata.find(x => x.key === 'employee');
  const employee = fEmployee && JSON.parse(fEmployee.data);

  return (
    <>
      <Form form={form} layout="vertical">
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
            renderComboBox={({ handleOnChange, ...rest }) => (
              <ComboBox
                onChange={handleOnChange}
                textField="name"
                valueField="id"
                labelInValue
                type={ComboBoxType.Employee}
                width="200"
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
            renderComboBox={({ handleOnChange, ...rest }) => (
              <ComboBox
                onChange={handleOnChange}
                textField="name"
                valueField="id"
                type={ComboBoxType.Leader}
                width="200"
                labelInValue
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

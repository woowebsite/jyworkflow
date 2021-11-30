import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Layout, Row, Col } from 'antd';
import { useIntl } from 'react-intl';
import moment from 'moment';

import Form from 'components/Form';
import Card from 'components/Card';
import Input from 'components/Input';
import Checkbox from 'components/Checkbox';
import DatePicker from 'components/DatePicker';
import TextEditable from '~/components/TextEditable';
import AuthorizedWrapper from 'components/AuthorizedWrapper';
import ComboBox, { ComboBoxType } from '~/components/ComboBox';
import ComboBoxTaxonomy, { TaxonomyType } from '~/components/ComboBoxTaxonomy';

import useTranslate from 'hooks/useTranslate';
import jobService from 'services/jobService';

import JOB_SETTING from 'constants/jobSettings';
import { layoutDetail } from 'constants/form';

import { isEmpty } from 'shared/objectHelper';
import { smallerThan } from 'shared/antdHelper';
import { formatMoney } from '~/shared/formatHelper';
import { fieldsToMetadata, fieldsToTaxonomies } from 'shared/metadataHelper';
import updateJobAuthConfig from 'features/jobs/authorized/updateJob';

const { Item, useForm } = Form;
const { TextArea } = Input;

interface IProps {
  initialValues?: any;
  layout?: any;
  session?: any;
  onFieldChange?: (path: string | string[], value: string) => void;
  onSaveCompleted?: (resp: any) => void;
}

const JobForm = forwardRef<any, IProps & React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    // DECLARES
    const { formatMessage } = useIntl();
    const [dept, setDept] = useState(0);
    const { initialValues, onSaveCompleted } = props;
    const job_status = initialValues?.job_status;
    const metadata = initialValues?.metadata;
    const t = (id, values?) => formatMessage({ id }, values);
    const [upsertJob] = jobService.upsert({ onCompleted: onSaveCompleted }); //(userQueries.UPSERT_USER);
    const [form] = useForm();
    const layout = props.layout || layoutDetail;

    const fCustomer = metadata?.find(x => x.key === 'customer');
    const customer = fCustomer && JSON.parse(fCustomer.data);

    const fLeader = metadata?.find(x => x.key === 'leader');
    const leader = fLeader && JSON.parse(fLeader.data);

    const fEmployee = metadata?.find(x => x.key === 'employee');
    const employee = fEmployee && JSON.parse(fEmployee.data);
    
    const fPriority = metadata?.find(x => x.key === 'priority');
    const priority = fPriority
      ? JSON.parse(fPriority.data)
      : { name: 'Normal', value: 4 };

    const formSetFields = job => {
      form.setFields([
        { name: ['job', 'title'], value: job.title },
        { name: ['job', 'code'], value: job.code },
        { name: ['job', 'link'], value: job.link },
        { name: ['job', 'description'], value: job.description },
        { name: ['job', 'publishDate'], value: moment(job.publishDate) },
        { name: ['job', 'dueDate'], value: moment(job.dueDate) },

        // taxonomies
        {
          name: ['taxonomies', 'job_status'],
          value: job.job_status ? parseInt(job.job_status.value, 10) : null,
        },

        // metadata
        { name: ['metadata', 'link'], value: job.link },
        { name: ['metadata', 'isDemoColor'], value: !!job.isDemoColor },
        {
          name: ['metadata', 'isDemoLayout'],
          value: !!job.isDemoLayout,
        },
        {
          name: ['metadata', 'employee'],
          value: job.employee,
        },
        {
          name: ['metadata', 'leader'],
          value: job.leader,
        },
        {
          name: ['metadata', 'customer'],
          value: job.customer,
        },
        { 
          name: ['metadata', 'priority'], 
          value: job.priority 
        },
      ]);
    };

    // EFFECT
    useEffect(
      () => {
        if (initialValues) {
          formSetFields(initialValues);
        }
      },
      [initialValues],
    );

    /// EVENTS
    useImperativeHandle(ref, () => ({
      submit,
      getFieldsValue,
      validateFields,
    }));

    const getFieldsValue = () => form.getFieldsValue();
    const validateFields = () => form.validateFields();
    const submit = () => {
      form
        .validateFields()
        .then(values => {
          const job = initialValues
            ? { id: initialValues?.id, code: initialValues?.code, ...values.job }
            : values.job;

          // metadata fields
          const metadata = fieldsToMetadata(values.metadata);
          // taxonomies fields
          const taxonomyFields = !isEmpty(values.taxonomies)
            ? Object.values(values.taxonomies)
            : [];
          const taxonomies = fieldsToTaxonomies(taxonomyFields);

          upsertJob({
            variables: { job, metadata, taxonomies },
          });
        })
        .catch(errorInfo => {
          console.log('Error: ', errorInfo);
        });
    };

    const onTitleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
      if (props.onFieldChange) {
        props.onFieldChange!(
          ['job', 'title'],
          form.getFieldValue(['job', 'title']),
        );
      }
    };

    const updateDept = () => {
      const cost = parseInt(form.getFieldValue(['metadata', 'cost']));
      const paid = parseInt(form.getFieldValue(['metadata', 'paid']));
  
      setDept(cost - paid);
    };
  
    const onFieldBlur = () => {
      updateDept();
    };

    return (
      <Form
        id="JobForm"
        form={form}
        {...layout}
        initialValues={{
          job: {
            publishDate: moment(),
            dueDate: moment().add(JOB_SETTING.dueDateIncrease, 'day'),
          },
          metadata: {
            isDemoColor: false,
            isDemoLayout: false,
            priority: 4, // Normal
          },
          taxonomies: {},
        }}
        onFinish={submit}
      >
        <Row gutter={24}>
          <Col span="16">
            <Card className="pt-3 mb-4" title={t('jobCreateform.basicInfor')}>
              <Item name={['job', 'code']} label={t('jobCreateform.label.code')}>
                <Input disabled />
              </Item>
              <Item
                name={['job', 'title']}
                rules={[
                  {
                    required: true,
                    message: useTranslate('validator.required', {
                      field: 'jobCreateform.label.title',
                    }),
                  },
                ]}
                label={t('jobCreateform.label.title')}
              >
                <Input onChange={onTitleChange} />
              </Item>

              <Item
                name={['metadata', 'link']}
                label={t('jobCreateform.label.link')}
              >
                <Input.TextArea />
              </Item>

              <Item
                name={['job', 'publishDate']}
                label={t('jobCreateform.label.publishDate')}
              >
                <DatePicker />
              </Item>

              <Item
                name={['job', 'dueDate']}
                label={t('jobCreateform.label.dueDate')}
              >
                <DatePicker
                  disabledDate={smallerThan(
                    form.getFieldValue(['job', 'publishDate']),
                  )}
                />
              </Item>

              <Item name={['metadata', 'isDemoColor']} valuePropName="checked" label={t('jobCreateform.label.demoColor')}>
                <Checkbox />
              </Item>

              <Item name={['metadata', 'isDemoLayout']} valuePropName="checked" label={t('jobCreateform.label.demoLayout')}>
                <Checkbox />
              </Item>

              <Item
                name={['job', 'description']}
                label={t('jobCreateform.label.description')}
              >
                <TextArea />
              </Item>
            </Card>
          </Col>
          <Col span="8">
          <AuthorizedWrapper
              config={updateJobAuthConfig.JobStatusBox}
              session={props.session}
            >
              <Card className="mb-4" title={t('jobStatus.title')}>
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
                    renderComboBox={({ handleOnChange, ...rest }) => (
                      <ComboBoxTaxonomy
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
                    renderComboBox={({ handleOnChange, ...rest }) => (
                      <ComboBox
                        onChange={handleOnChange}
                        textField="name"
                        valueField="id"
                        type={ComboBoxType.Customer}
                        width="200"
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
                    renderComboBox={({ handleOnChange, ...rest }) => (
                      <ComboBoxTaxonomy
                        type={TaxonomyType.Job_Priority}
                        onChange={handleOnChange}
                        textField="name"
                        valueField="id"
                        labelInValue
                        width="200"
                        {...rest}
                      />
                    )}
                  />
                </Item>
              </Card>
              <Card className="mb-4 status-form">
                <Item
                  label={t('jobMoney.title')}
                  name={['metadata', 'cost']}
                  rules={[
                    {
                      required: true,
                      message: useTranslate('validator.required', {
                        field: 'jobMoney.label.cost',
                      }),
                    },
                  ]}
                >
                  <TextEditable
                    style={{ textAlign: 'right' }}
                    defaultValue={initialValues?.cost}
                    defaultText={formatMoney(initialValues?.cost || 0)}
                    renderInput={({ handleOnChange, ref, ...rest }) => {
                      return (
                        <Input
                          ref={ref}
                          onPressEnter={onFieldBlur}
                          onChange={e =>
                            handleOnChange(
                              parseInt(e.target.value),
                              formatMoney(e.target.value || 0),
                            )
                          }
                          style={{ width: '150px', textAlign: 'right' }}
                          {...rest}
                        />
                      );
                    }}
                  />
                </Item>
              </Card>
            </AuthorizedWrapper>
          </Col>
        </Row>
      </Form>
    );
  },
);

export default JobForm;

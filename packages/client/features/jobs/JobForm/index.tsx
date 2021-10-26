import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import { useIntl } from 'react-intl';
import moment from 'moment';
import { DatePicker } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import TextArea from 'antd/lib/input/TextArea';

import Form from 'components/Form';
import Input from 'components/Input';

import useTranslate from 'hooks/useTranslate';
import jobService from 'services/jobService';

import JOB_SETTING from '~/constants/jobSettings';
import { fieldsToMetadata } from '~/shared/metadataHelper';
import { smallerThan } from '~/shared/antdHelper';
import { isEmpty } from '~/shared/objectHelper';

const { Item, useForm } = Form;

interface IProps {
  initialValues?: any;
  layout?: any;
  onFieldChange?: (path: string | string[], value: string) => void;
  onSaveCompleted?: (resp: any) => void;
}

const defaultLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const JobForm = forwardRef<any, IProps & React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    // DECLARES
    const { formatMessage } = useIntl();
    const { initialValues, onSaveCompleted } = props;
    const t = (id, values?) => formatMessage({ id }, values);
    const [upsertJob] = jobService.upsert({ onCompleted: onSaveCompleted }); //(userQueries.UPSERT_USER);
    const [form] = useForm();
    const layout = props.layout || defaultLayout;

    const formSetFields = job => {
      console.log('job', job);

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
        { name: ['metadata', 'priority'], value: job.priority },
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
            ? { id: initialValues.id, ...values.job }
            : values.job;

          const metadata = fieldsToMetadata(values.metadata);

          const taxonomies = !isEmpty(values.taxonomies)
            ? Object.values(values.taxonomies)
            : [];

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
        layout="vertical"
      >
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

        <Item name={['metadata', 'isDemoColor']} valuePropName="checked">
          <Checkbox>{t('jobCreateform.label.demoColor')}</Checkbox>
        </Item>

        <Item name={['metadata', 'isDemoLayout']} valuePropName="checked">
          <Checkbox>{t('jobCreateform.label.demoLayout')}</Checkbox>
        </Item>

        <Item
          name={['job', 'description']}
          label={t('jobCreateform.label.description')}
        >
          <TextArea />
        </Item>
      </Form>
    );
  },
);

export default JobForm;

import React, { forwardRef, useEffect, useImperativeHandle } from 'react'
import { useIntl } from 'react-intl'
import moment from 'moment'

import Form from 'components/Form'
import Input, { TextArea } from 'components/Input'
import Checkbox from 'components/Checkbox'
import DatePicker from 'components/DatePicker'

import useTranslate from 'hooks/useTranslate'
import jobService from 'services/jobService'

import JOB_SETTING from 'constants/jobSettings'
import { layoutDetail } from 'constants/form'

import { fieldsToMetadata } from 'shared/metadataHelper'
import { smallerThan } from 'shared/antdHelper'
import { isEmpty } from 'shared/objectHelper'
import { Col, Row } from 'antd'
import style from './style.module.scss'
import ComboBox, { ComboBoxType } from '~/components/ComboBox'

const { Item, useForm } = Form

interface IProps {
  initialValues?: any
  layout?: any
  onFieldChange?: (path: string | string[], value: string) => void
  onSaveCompleted?: (resp: any) => void
}

const JobForm = forwardRef<any, IProps & React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    // DECLARES
    const { formatMessage } = useIntl()
    const { initialValues, onSaveCompleted } = props
    const t = (id, values?) => formatMessage({ id }, values)
    const [upsertJob] = jobService.upsert({ onCompleted: onSaveCompleted }) //(userQueries.UPSERT_USER);
    const [form] = useForm()
    const layout = props.layout || layoutDetail

    const formSetFields = (job) => {
      form.setFields([
        { name: ['job', 'title'], value: job.title },
        { name: ['job', 'type'], value: job.type },
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
      ])
    }

    // EFFECT
    useEffect(
      () => {
        if (initialValues) {
          formSetFields(initialValues)
        }
      },
      [initialValues]
    )

    /// EVENTS
    useImperativeHandle(ref, () => ({
      submit,
      getFieldsValue,
      validateFields,
    }))

    const getFieldsValue = () => form.getFieldsValue()
    const validateFields = () => form.validateFields()
    const submit = () => {
      form.isFieldsTouched() &&
        form
          .validateFields()
          .then((values) => {
            const job = initialValues
              ? { id: initialValues.id, ...values.job }
              : values.job

            const metadata = fieldsToMetadata(values.metadata)

            const taxonomies = !isEmpty(values.taxonomies)
              ? Object.values(values.taxonomies)
              : []

            upsertJob({
              variables: { job, metadata, taxonomies },
            })
          })
          .catch((errorInfo) => {
            console.log('Error: ', errorInfo)
          })
    }

    const onTitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (props.onFieldChange) {
        props.onFieldChange!(
          ['job', 'title'],
          form.getFieldValue(['job', 'title'])
        )
      }
    }

    return (
      <Form
        id='JobForm'
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

        <Item name={['metadata', 'link']} label={t('jobCreateform.label.link')}>
          <TextArea />
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
              form.getFieldValue(['job', 'publishDate'])
            )}
          />
        </Item>

        <Item name={['job', 'type']} label={t('jobCreateform.label.type')}>
          <ComboBox textField='data' valueField='key' type={ComboBoxType.JobType} />
        </Item>

        <Row className={`${style.checkboxRow} checkboxRow`}>
          <Col span={4} className='label'>
            {t('jobCreateform.label.demoColor')}
          </Col>
          <Col span={20}>
            <Row>
              <Col span={8}>
                <Item
                  labelCol={{ span: 8 }}
                  name={['metadata', 'isDemoColor']}
                  valuePropName='checked'
                >
                  <Checkbox />
                </Item>
              </Col>
              <Col span={16}>
                <Item
                  className='second-checkbox'
                  labelCol={{ md: 8, xs: { span: 16 } }}
                  wrapperCol={{ md: 16, xs: { span: 16 } }}
                  name={['metadata', 'isDemoLayout']}
                  valuePropName='checked'
                  label={t('jobCreateform.label.demoLayout')}
                >
                  <Checkbox />
                </Item>
              </Col>
            </Row>
          </Col>
        </Row>

        <Item
          name={['job', 'description']}
          label={t('jobCreateform.label.description')}
        >
          <TextArea />
        </Item>
      </Form>
    )
  }
)

export default JobForm

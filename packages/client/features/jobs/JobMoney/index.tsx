import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import { Card } from 'antd'
import { useIntl } from 'react-intl'

import { formatMoney } from '~/shared/formatHelper'
import { fieldsToMetadata } from '~/shared/metadataHelper'

import Form from '~/components/Form'

import jobService from '~/services/jobService'

const { Item, useForm } = Form

const JobMoney = forwardRef<any, any>((props, ref) => {
  const { formatMessage } = useIntl()
  const { initialValues } = props
  const t = (id, values?) => formatMessage({ id }, values)
  const [upsertJob] = jobService.upsert()
  const [form] = useForm()
  const [dept, setDept] = useState(0)

  // EFFECTS
  useEffect(() => {
    if (initialValues) {
      const cost = parseInt(initialValues.cost)
      const paid = parseInt(initialValues.paid)

      setDept(cost - paid)
    }
  }, [])

  /// EVENTS
  useImperativeHandle(ref, () => ({
    getFieldsValue,
    validateFields,
    submit,
  }))

  const submit = () => {
    const { id, code } = initialValues
    form.isFieldsTouched() &&
      form
        .validateFields()
        .then((values) => {
          console.log('values', values)

          // metadata fields
          const metadataFields = {
            ...values.metadata,
          }

          // taxonomies fields
          const taxonomyFields = values.taxonomies

          // parse
          const metadata = fieldsToMetadata(metadataFields)
          const taxonomies = taxonomyFields ? Object.values(taxonomyFields) : []

          upsertJob({
            variables: { job: { id, code }, metadata, taxonomies },
          })
        })
        .catch((errorInfo) => {
          console.log('Error: ', errorInfo)
        })
  }

  const getFieldsValue = () => form.getFieldsValue()
  const validateFields = () => form.validateFields()

  const updateDept = () => {
    const cost = parseInt(form.getFieldValue(['metadata', 'cost']))
    const paid = parseInt(form.getFieldValue(['metadata', 'paid']))

    setDept(cost - paid)
  }

  const onFieldBlur = () => {
    updateDept()
  }

  console.log('initialValues', initialValues.cost)

  const initialFormValues = {
    metadata: {
      cost: initialValues.cost,
    },
  }

  // Render
  return (
    <>
      <Form form={form} labelAlign='left' initialValues={initialFormValues}>
        <Card className='mb-4 status-form'>
          <Item label={t('jobMoney.title')} name={['metadata', 'cost']}>
            <span className='font-weight-bold text-danger'>
            {formatMoney(initialValues.cost || 0)}
            </span>
          </Item>
        </Card>
      </Form>
    </>
  )
})

export default JobMoney

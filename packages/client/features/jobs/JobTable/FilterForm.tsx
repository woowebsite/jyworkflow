import React from 'react';
import { Row, Col } from 'antd';
import { useIntl } from 'react-intl';
import { SearchOutlined } from '@ant-design/icons';
import _ from 'lodash';

// comoonents
import ComboBoxTaxonomy, { TaxonomyType } from 'components/ComboBoxTaxonomy';
import ComboBox, { ComboBoxType } from 'components/ComboBox';
import Button from "components/Button";
import Form from "components/Form";
import Input from "components/Input";
import DatePicker from "components/DatePicker";
import { fieldsToMetadata } from '~/shared/metadataHelper';

const { Item, useForm } = Form;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

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
        if (values.job.publishDate) {
          queries.job.startPublishDate = values.job.publishDate
            .startOf('month')
            .toString();
          queries.job.endPublishDate = values.job.publishDate
            .endOf('month')
            .toString();
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
    <div className="filter-form">
      <Form
        initialValues={values}
        onFinish={handleFinish}
        className="mb-3 no-space-form"
        name="basic"
        form={form}
        {...layout}
      >
        <Row gutter={32}>
          <Col span={6}>
            <Item
              name={['job', 'code']}
              label={t('jobTable.filter.code')}
            >
              <Input placeholder={t('jobTable.columns.id')} allowClear />
            </Item>
          </Col>
          <Col span={6}>
            <Item
              name={['job', 'publishDate']}
              label={t('jobTable.filter.month')}
            >
              <DatePicker picker="month" placeholder={'Chọn tháng'} />
            </Item>
          </Col>
          <Col span={6}>
            <Item
              name={['job', 'title']}
              label={t('jobTable.columns.title')}
            >
              <Input placeholder={t('jobTable.columns.title')} allowClear />
            </Item>
          </Col>
          <Col span={6}>
            <Item
              name={['taxonomies', 'job_status']}
              label={t('jobTable.columns.status')}
            >
              <ComboBoxTaxonomy
                allowClear
                type={TaxonomyType.Job_Status}
                placeholder={t('jobTable.columns.status')}
              />
            </Item>
          </Col>
          <Col span={6}>
            <Item
              name={['metadata', 'priority']}
              label={t('jobTable.columns.priority')}
            >
              <ComboBoxTaxonomy allowClear type={TaxonomyType.Job_Priority} />
            </Item>
          </Col>
          <Col span={6}>
            <Item
              name={['metadata', 'customer']}
              label={t('jobTable.filter.customer')}
            >
              <ComboBox
                textField="name"
                valueField="id"
                type={ComboBoxType.Customer}
                width="200"
                labelInValue
                allowClear
              />
            </Item>
          </Col>
          <Col span={6}>
            <Item
              name={['metadata', 'leader']}
              label={t('jobTable.filter.leader')}
            >
              <ComboBox
                textField="name"
                valueField="id"
                type={ComboBoxType.Leader}
                width="200"
                labelInValue
                allowClear
              />
            </Item>
          </Col>
          <Col span={6}>
            <Item
              name={['metadata', 'employee']}
              label={t('jobTable.filter.employee')}
            >
              <ComboBox
                textField="name"
                valueField="id"
                type={ComboBoxType.Employee}
                width="200"
                labelInValue
                allowClear
              />
            </Item>
          </Col>
          <Col span={6}>
            <Item>
              <Button icon={<SearchOutlined />} htmlType="submit">
                {t('buttons.search')}
              </Button>
            </Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FilterForm;

import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Row, Col } from 'antd';
import _ from 'lodash';
import { SearchOutlined } from '@ant-design/icons';

import Button from "components/Button";
import Form from "components/Form";
import Input from "components/Input";
import ComboBox, { ComboBoxType } from 'components/ComboBox';
import DatePicker from "components/DatePicker";

import { fieldsToMetadata } from 'shared/metadataHelper';

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
        let queries: any = { job: {
          ...values.job,
          status: 'F'
        }, jobTerm: values.jobTerm };

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
              name={['job', 'publishDate']}
              label={t('salaryJobTable.filter.month')}
            >
              <DatePicker picker="month" placeholder={'Chọn tháng'} />
            </Item>
          </Col>
          <Col span={6}>
            <Item
              name={['jobTerm', 'assignee_id']}
              label={t('salaryJobTable.filter.employee')}
              rules = {[
                {
                  required: true,
                  message: t("validator.required", {
                    field: t("salaryJobTable.filter.employee"),
                  }),
                },
              ]}
            >
              <ComboBox
                textField="name"
                valueField="id"
                type={ComboBoxType.Employee}
                width="200"
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

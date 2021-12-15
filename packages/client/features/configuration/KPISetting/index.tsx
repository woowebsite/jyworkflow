import {
  Row,
  Col,
  Card,
  notification,
} from 'antd';
import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
} from 'react';
import { useIntl } from 'react-intl';
import optionService from 'services/optionService';
import { fieldsToMetadata } from 'shared/metadataHelper';
import { UserContext } from 'layout/AdminLayout';
import { layoutSetting } from 'constants/form';
import KPISettingConstant from '../constants/KPISettingConstant';

import MoneyInput from 'components/MoneyInput';
import PercentInput from 'components/PercentInput';
import Button from "components/Button";
import Form from "components/Form";

const { Item, useForm } = Form;

interface KPISettingProps {
  initialValues?: any;
  className?: string;
}

const KPISetting = forwardRef<any, KPISettingProps>((props, ref) => {
  const { className, initialValues, ...rest } = props;
  const session = useContext(UserContext);
  const { formatMessage } = useIntl();
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

  /// EVENTS
  useImperativeHandle(ref, () => ({
    getFieldsValue,
    validateFields,
  }));

  const formSetFields = data => {
    form.setFields([
      {
        name: ['data', KPISettingConstant.Employee_Money],
        value: data[KPISettingConstant.Employee_Money],
      },
      {
        name: ['data', KPISettingConstant.Employee_Percent],
        value: data[KPISettingConstant.Employee_Percent],
      },
      {
        name: ['data', KPISettingConstant.Leader_Money],
        value: data[KPISettingConstant.Leader_Money],
      },
      {
        name: ['data', KPISettingConstant.Leader_Percent],
        value: data[KPISettingConstant.Leader_Percent],
      },
    ]);
  };

  const handleSaveCompleted = () => {
    notification.success({
      message: t('messages.notification.success.message'),
      description: t('messages.notification.success.save'),
      placement: 'bottomLeft',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  const [upsert] = optionService.upsertOption({
    onCompleted: handleSaveCompleted,
  });

  const getFieldsValue = () => form.getFieldsValue();
  const validateFields = () => form.validateFields();

  const handleSave = () => {
    const fieldsValue = form.getFieldsValue();
    const data = fieldsToMetadata(fieldsValue.data);

    upsert({
      variables: {
        data: data,
      },
    });
  };

  return (
    <Form form={form} {...layoutSetting} className="no-space-form">
      <Card
        title={t('kpiSetting.title')}
        className={`${className} status-form`}
        extra={[
          <Button type="primary" onClick={handleSave}>
            {t('buttons.save')}
          </Button>,
        ]}
        {...rest}
      >
        <Row gutter={32}>
          <Col span={12}>
            <Item
              extra={t('kpiSetting.labels.leaderDesc')}
              label={t('kpiSetting.labels.leader')}
            >
              <Item
                name={['data', KPISettingConstant.Leader_Money]}
                className="mb-3"
              >
                <MoneyInput />
              </Item>
              <Item
                name={['data', KPISettingConstant.Leader_Percent]}
                className="mb-3"
              >
                <PercentInput />
              </Item>
            </Item>
          </Col>
          <Col span={12}>
            <Item
              label={t('kpiSetting.labels.employee')}
              extra={t('kpiSetting.labels.employeeDesc')}
            >
              <Item
                name={['data', KPISettingConstant.Employee_Money]}
                className="mb-3"
              >
                <MoneyInput />
              </Item>
              <Item
                name={['data', KPISettingConstant.Employee_Percent]}
                className="mb-3"
              >
                <PercentInput />
              </Item>
            </Item>
          </Col>
        </Row>
      </Card>
    </Form>
  );
});

export default KPISetting;

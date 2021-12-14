import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { useIntl } from 'react-intl';
import { Card, notification, Row, Col } from 'antd';

import Form from "components/Form";
import Button from "components/Button";
import PercentInput from 'components/PercentInput';

import { UserContext } from 'layout/AdminLayout';
import optionService from 'services/optionService';
import { fieldsToMetadata } from 'shared/metadataHelper';
import SalarySettingConstant from '../constants/SalarySettingConstant';

const { Item, useForm } = Form;

interface SalarySettingProps {
  initialValues?: any;
  className?: string;
}

const SalarySetting = forwardRef<any, SalarySettingProps>((props, ref) => {
  const { className, initialValues, ...rest } = props;
  const session = useContext(UserContext);
  const [user, setUser] = useState(session.user);
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
        name: ['data', SalarySettingConstant.Retoucher],
        value: data[SalarySettingConstant.Retoucher],
      },
      {
        name: ['data', SalarySettingConstant.Blender],
        value: data[SalarySettingConstant.Blender],
      },
      {
        name: ['data', SalarySettingConstant.Leader],
        value: data[SalarySettingConstant.Leader],
      },
    ]);
  };

  const handleSaveCompleted = result => {
    // update balance
    setUser(result.accountTransactionMoney);
    form.resetFields();

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
    <Form form={form} layout="vertical">
      <Card
        title={t('salarySetting.title')}
        className={`${className} status-form`}
        extra={[
          <Button type="primary" onClick={handleSave}>
            {t('buttons.save')}
          </Button>,
        ]}
        {...rest}
      >
        <Row gutter={32}>
          <Col span={8}>
              <Item
              name={['data', SalarySettingConstant.Retoucher]}
              label={t('salarySetting.labels.retoucher')}
            >
              <PercentInput />
            </Item>
          </Col>
          <Col span={8}>
            <Item
            name={['data', SalarySettingConstant.Blender]}
            label={t('salarySetting.labels.blend')}
          >
            <PercentInput />
          </Item>
          </Col>
          <Col span={8}>
              <Item
              name={['data', SalarySettingConstant.Leader]}
              label={t('salarySetting.labels.leader')}
            >
              <PercentInput />
            </Item>
          </Col>
        </Row>
      </Card>
    </Form>
  );
});

export default SalarySetting;

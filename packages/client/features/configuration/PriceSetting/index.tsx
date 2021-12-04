import { Row, Col, Card } from 'antd';
import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { useIntl } from 'react-intl';

import Notification from 'components/Notification';
import MoneyInput from 'components/MoneyInput';
import Button from "components/Button";
import Form from "components/Form";

import { fieldsToMetadata } from 'shared/metadataHelper';
import { UserContext } from 'layout/AdminLayout';
import { layoutSetting } from 'constants/form';
import optionService from 'services/optionService';
import PriceSettingConstant from '../constants/PriceSettingConstant';

const { Item, useForm } = Form;

interface PriceSetting {
  initialValues?: any;
  className?: string;
}

const PriceSetting = forwardRef<any, PriceSetting>((props, ref) => {
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
        name: ['data', PriceSettingConstant.Single],
        value: data[PriceSettingConstant.Single],
      },
      {
        name: ['data', PriceSettingConstant.Zoom],
        value: data[PriceSettingConstant.Zoom],
      },
    ]);
  };

  const handleSaveCompleted = result => {
    // update balance
    setUser(result.accountTransactionMoney);
    form.resetFields();

    <Notification />
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
        extra={[
          <Button type="primary" onClick={handleSave}>
            {t('buttons.save')}
          </Button>,
        ]}
        title={t('priceSetting.title')}
        className={`${className} status-form`}
        {...rest}
      >
        <Row gutter={32}>
          <Col span={12}>
            <Item
              name={['data', PriceSettingConstant.Single]}
              label={t('priceSetting.labels.single')}
            >
              <MoneyInput />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name={['data', PriceSettingConstant.Zoom]}
              label={t('priceSetting.labels.zoom')}
            >
              <MoneyInput />
            </Item>
          </Col>
        </Row>
      </Card>
    </Form>
  );
});

export default PriceSetting;

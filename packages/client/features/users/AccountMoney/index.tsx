import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useIntl } from 'react-intl';
import {
  Card,
  notification,
} from 'antd';

import Form from "components/Form";
import Input from "components/Input";
import Button from "components/Button";
import InputNumber from "components/InputNumber";
import { TaxonomyType } from 'components/ComboBoxTaxonomy';

import UserMetaType from 'features/users/constants/UserMetaType';
import userService from 'services/userService';
import { formatMoney } from 'shared/formatHelper';
import { hasPermission } from 'shared/authHelper';
import settingProfileConfig from '../authorized/profile';

const { Item, useForm } = Form;

interface AccountMoneyProps {
  className?: string;
  user: any;
  session: any;
}

const AccountMoney = forwardRef<any, AccountMoneyProps>((props, ref) => {
  const { className, session, ...rest } = props;
  const [user, setUser] = useState(props.user);
  const { formatMessage } = useIntl();
  const t = (id, values?) => formatMessage({ id }, values);
  const [form] = useForm();

  /// EVENTS
  useImperativeHandle(ref, () => ({
    getFieldsValue,
    validateFields,
  }));

  const handleDepositCompleted = result => {
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

  const [transactionMoney] = userService.accountTransactionMoney({
    onCompleted: handleDepositCompleted,
  });

  const getFieldsValue = () => form.getFieldsValue();
  const validateFields = () => form.validateFields();

  const handleDeposit = () => {
    const fieldsValue = form.getFieldsValue();

    transactionMoney({
      variables: {
        user: { id: user.id, email: user.email },
        taxonomies: fieldsValue.taxonomies,
      },
    });
  };

  // RENDER
  const actions = hasPermission(settingProfileConfig.AccountMoney, session) && [
    <>
      <Input.Group className="d-flex">
        <Item
          name={['taxonomies', TaxonomyType.Account_Deposit]}
          className="field-number mr-3"
        >
          <InputNumber style={{ width: '100%' }} step={1000} />
        </Item>
        <Button type="primary" onClick={handleDeposit}>
          {t('buttons.deposit')}
        </Button>
      </Input.Group>
    </>,
  ];

  return (
    <Form form={form}>
      <Card
        title={t('accountMoney.title')}
        className={`${className} status-form`}
        extra={
          <span className="h5 text-primary">
            {user ? formatMoney(user[UserMetaType.AccountMoney]) : 0}
          </span>
        }
        actions={actions}
        {...rest}
      >
        <Item
          name={['metadata', 'account_holding']}
          className="field-number"
          label={t('accountMoney.label.holding')}
        >
          {user ? formatMoney(user[UserMetaType.AccountHolding]) : 0}
        </Item>

        <Item
          name={['metadata', 'account_dept']}
          className="field-number"
          label={t('accountMoney.label.dept')}
        >
          <span className="text-danger">
            {user ? formatMoney(user[UserMetaType.AccountDept]) : 0}
          </span>
        </Item>
      </Card>
    </Form>
  );
});

export default AccountMoney;

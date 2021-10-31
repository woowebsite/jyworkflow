import React, { forwardRef, useImperativeHandle } from 'react';
import { useIntl } from 'react-intl';
import { notification, Row, Col, Card } from 'antd';

import Form from "components/Form";
import Input from "components/Input";
import Button from "components/Button";

import useTranslate from 'hooks/useTranslate';
import userService from 'services/userService';

const { Item, useForm } = Form;
const { Password } = Input;

interface IProps {
  user: any;
}
const ChangePasswordForm = forwardRef<any, IProps>((props, ref) => {
  // DECLARES
  const { user } = props;
  const { formatMessage } = useIntl();
  const t = (id, values?) => formatMessage({ id }, values);
  const [form] = useForm();
  const [changePassword] = userService.changePassword({
    onCompleted: resp => {
      if (resp.changePassword.result) {
        notification.success({
          message: 'Notification Success',
          description: 'Save successfully',
          placement: 'bottomLeft',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      } else {
        notification.error({
          message: 'Notification Error',
          description: t('messages.changePassword.isValid'),
          placement: 'bottomLeft',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      }
    },
  });

  /// EVENTS
  useImperativeHandle(ref, () => ({
    submit: handleFinish,
  }));

  const handleFinish = () => {
    form
      .validateFields()
      .then(values => {
        changePassword({ variables: values });
      })
      .catch(errorInfo => {
        notification.error({
          message: 'Notification Error',
          description: errorInfo,
          placement: 'bottomLeft',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      });
  };

  // RENDER
  return (
    <Form
      form={form}
      id="ChangePasswordForm"
      onFinish={handleFinish}
      layout="vertical"
      className="no-space-form"
    >
      <Card
        title={t('changePassword.title')}
        className="status-form"
        extra={[
          <Button type="primary" onClick={handleFinish}>
            {t('buttons.save')}
          </Button>,
        ]}
      >
        <Row gutter={32}>
          {user.havePassword && (
            <Col span={8}>
              <Item
                name="currentPassword"
                rules={[
                  {
                    required: true,
                    message: useTranslate('validator.required', {
                      field: 'changePasswordForm.label.current',
                    }),
                  },
                ]}
                label={t('changePasswordForm.label.current')}
              >
                <Password />
              </Item>
            </Col>
          )}
          <Col span={8}>
            <Item
              name="password"
              rules={[
                {
                  required: true,
                  message: useTranslate('validator.required', {
                    field: 'changePasswordForm.label.password',
                  }),
                },
              ]}
              label={t('changePasswordForm.label.password')}
            >
              <Password />
            </Item>
          </Col>
          <Col span={8}>
            <Item
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: useTranslate('validator.required', {
                    field: 'changePasswordForm.label.confirmPassword',
                  }),
                },
              ]}
              label={t('changePasswordForm.label.confirmPassword')}
            >
              <Password className="custom-input-password" />
            </Item>
          </Col>
        </Row>
      </Card>
      
    </Form>
  );
});

export default ChangePasswordForm;

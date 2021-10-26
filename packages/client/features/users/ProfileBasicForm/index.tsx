import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import { useIntl } from 'react-intl';

import Button from "components/Button";
import Form from "components/Form";
import Input from "components/Input";
import UploadImage from '~/components/UploadImage';

import useTranslate from 'hooks/useTranslate';
import userService from 'services/userService';

const { Item, useForm } = Form;

interface IProps {
  user: any;
}
const ProfileBasicForm = forwardRef<any, IProps>((props, ref) => {
  // DECLARES
  const { formatMessage } = useIntl();
  const t = (id, values?) => formatMessage({ id }, values);
  const [upsertUser] = userService.upsert(); //(userQueries.UPSERT_USER);
  const [form] = useForm();

  const formSetFields = user => {
    form.setFields([
      { name: 'name', value: user.name },
      { name: 'email', value: user.email },
      { name: 'image', value: user.image },
    ]);
  };

  // EFFECT
  useEffect(
    () => {
      formSetFields(props.user);
    },
    [props.user],
  );

  /// EVENTS
  useImperativeHandle(ref, () => ({
    submit,
    validateFields
  }));

  const submit = () => {
    form
      .validateFields()
      .then(values => {
        const data = props.user.id ? { id: props.user.id, ...values } : values;
        upsertUser({
          variables: { user: data, metadata: [] },
        });
      })
      .catch(errorInfo => {
        console.log('Error: ', errorInfo);
      });
  };
  
  const validateFields = () => form.validateFields();

  const onSetImageUrl = filename => {
    form.setFieldsValue({ image: filename });
  };

  return (
    <Form
      id="ProfileBasicForm"
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={submit}
      layout="vertical"
    >
      <Item
        name="name"
        rules={[
          {
            required: true,
            message: useTranslate('validator.required', {
              field: 'userCreateform.label.name',
            }),
          },
        ]}
        label={t('userCreateform.label.name')}
      >
        <Input />
      </Item>

      <Item name="email" label={t('userCreateform.label.email')}>
        <Input type="email" />
      </Item>

      <Item name="image" label={t('userCreateform.label.image')}>
        <UploadImage setImageUrl={onSetImageUrl} />
      </Item>
      <Item>
        <Button key="1" type="primary" onClick={submit}>
          {t('buttons.save')}
        </Button>
      </Item>
    </Form>
  );
});

export default ProfileBasicForm;

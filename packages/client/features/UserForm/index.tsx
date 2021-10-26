import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import { useIntl } from 'react-intl';

// components
import UploadImage from 'components/UploadImage';
import ComboBox from 'components/ComboBox';
import ComboBoxType from 'components/ComboBox/ComboBoxType';
import Form from 'components/Form';
import Input from 'components/Input';

import useTranslate from 'hooks/useTranslate';
import userService from 'services/userService';
import RoleType from '~/models/RoleType';

const { Item, useForm } = Form;

interface IProps {
  id?: number;
}
const UserForm = forwardRef<any, IProps>((props, ref) => {
  // DECLARES
  const { formatMessage } = useIntl();
  const { id: userId } = props;
  const t = (id, values?) => formatMessage({ id }, values);
  const [upsertUser] = userService.upsert(); //(userQueries.UPSERT_USER);
  const [form] = useForm();

  const { data, loading, refetch } = userService.get({
    variables: {
      where: { id: userId },
    },
  });

  const formSetFields = user => {
    form.setFields([
      { name: 'role_id', value: user.role_id },
      { name: 'name', value: user.name },
      { name: 'email', value: user.email },
      { name: 'image', value: user.image },
    ]);
  };

  // EFFECT
  useEffect(
    () => {
      if (props.id) {
        if (!loading) {
          formSetFields(data.user);
        }
      }
    },
    [props.id, loading, data],
  );

  /// EVENTS
  useImperativeHandle(ref, () => ({
    submit,
  }));

  const submit = () => {
    form
      .validateFields()
      .then(values => {
        const data = props.id ? { id: props.id, ...values } : values;
        upsertUser({
          variables: { user: data, metadata: []},
        });
      })
      .catch(errorInfo => {
        console.log('Error: ', errorInfo);
      });
  };

  const onSetImageUrl = filename => {
    form.setFieldsValue({ image: filename });
  };

  return (
    <Form
      id="UserForm"
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={submit}
      layout="vertical"
      initialValues={{
        role_id: RoleType.Employee
      }}
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

      <Item name="role_id" label={t('userCreateform.label.role')}>
        <ComboBox type={ComboBoxType.Role} valueField="id" textField="name" />
      </Item>

      <Item name="image" label={t('userCreateform.label.image')}>
        <UploadImage setImageUrl={onSetImageUrl} />
      </Item>
    </Form>
  );
});

export default UserForm;

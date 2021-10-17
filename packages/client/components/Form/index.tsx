import React from 'react';
import { Form as AntdForm } from 'antd';

const { useForm, Item, List, Provider } = AntdForm;

const Form = (props) => {
  const { children } = props;

  return (
    <AntdForm {...props} >
      {children}
    </AntdForm>
  );
};

Form.useForm = useForm;
Form.Item = Item;
Form.List = List;
Form.Provider = Provider;

export default Form;

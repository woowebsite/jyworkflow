import React, { FC } from 'react';
import { Form, FormInstance } from 'antd';

const { useForm, Item, List, Provider } = Form;

Form.useForm = useForm;
Form.Item = Item;
Form.List = List;
Form.Provider = Provider;

export default Form;

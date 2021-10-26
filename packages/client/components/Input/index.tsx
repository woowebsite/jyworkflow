import React from 'react';
import { Input as AntdInput } from 'antd';

import style from './style.module.scss';

const { Password, TextArea, Group } = AntdInput;

const Input = (props) => {
  const { children } = props;

  return (
    <AntdInput {...props} className={style['custom-input']} >
      {children}
    </AntdInput>
  );
};

Input.Password = Password;
Input.TextArea = TextArea;
Input.Group = Group;

export default Input;

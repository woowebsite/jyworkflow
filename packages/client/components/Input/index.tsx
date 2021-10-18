import React from 'react';
import { Input as AntdInput } from 'antd';

import style from './style.module.scss';

const Input = (props) => {
  const { children } = props;

  return (
    <AntdInput {...props} className={style['custom-input']} >
      {children}
    </AntdInput>
  );
};

export default Input;

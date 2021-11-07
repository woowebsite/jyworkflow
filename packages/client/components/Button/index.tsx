import React from 'react';
import { Button as AntdButton } from 'antd';

import style from './style.module.scss';

const Button = (props) => {
  const { children } = props;

  return (
    <AntdButton {...props} className={style['custom-button']} >
      {children}
    </AntdButton>
  );
};

const Group = (props) => {
  const { children } = props;

  return (
    <AntdButton.Group {...props} className={style['custom-button-group']} >
      {children}
    </AntdButton.Group>
  );
};

Button.Group = Group;

export default Button;

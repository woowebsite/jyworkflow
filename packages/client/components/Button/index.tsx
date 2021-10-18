import React from 'react';
import { Button as AntdButton } from 'antd';

import style from './style.module.scss';

const { Group } = AntdButton;

const Button = (props) => {
  const { children } = props;

  return (
    <AntdButton {...props} className={style['custom-button']} >
      {children}
    </AntdButton>
  );
};

Button.Group = Group;

export default Button;

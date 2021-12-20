import React from "react";
import { Button as AntdButton, ButtonProps } from "antd";

import style from "./style.module.scss";

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className } = props;

  return (
    <AntdButton {...props} className={`${style["custom-button"]} ${className}`}>
      {children}
    </AntdButton>
  );
};

const Group = (props) => {
  const { children } = props;

  return (
    <AntdButton.Group {...props} className={style["custom-button-group"]}>
      {children}
    </AntdButton.Group>
  );
};

export default Button;

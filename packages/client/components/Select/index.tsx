import React, { forwardRef } from 'react';
import { Select as AntdSelect } from 'antd';

import style from './style.module.scss';

export const { Option } = AntdSelect;

const Select = (props, ref) => {
  
  const { children } = props;

  return (
    <AntdSelect ref={ref} {...props} className={style['custom-select']}>
      {children}
    </AntdSelect>
  );
};

export default forwardRef(Select);

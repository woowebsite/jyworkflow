import React from 'react'
import { Dropdown as AntdDropdown } from 'antd'

import style from './style.module.scss'

const Dropdown = ({ overlay, children, ...props }) => {
  return (
    <AntdDropdown
      {...props}
      overlay={overlay}
      overlayClassName={style['custom-overlay-dropdown']}
    >
      {children}
    </AntdDropdown>
  )
}

export default Dropdown

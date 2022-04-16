import React, { forwardRef } from 'react'
import { Input as AntdInput } from 'antd'

import style from './style.module.scss'

const Input = (props, ref) => {
  const { children, className, ...others } = props

  return (
    <AntdInput
      ref={ref}
      {...others}
      className={`${className} ${style['custom-input']}`}
    >
      {children}
    </AntdInput>
  )
}
export default forwardRef(Input)

// const Input = (props) => {
//   const { children, ...others } = props;

//   return (
//     <AntdInput {...others} className={style['custom-input']}>
//       {children}
//     </AntdInput>
//   );
// };
// export default Input;

export const Password = (props) => {
  const { children, className } = props

  return (
    <AntdInput.Password
      {...props}
      className={`${className} ${style['custom-input-password']}`}
    >
      {children}
    </AntdInput.Password>
  )
}

export const TextArea = (props) => {
  const { children, className } = props

  return (
    <AntdInput.TextArea
      {...props}
      className={`${className} ${style['custom-input-textarea']}`}
    >
      {children}
    </AntdInput.TextArea>
  )
}

export const InputGroup = (props) => {
  const { children, className } = props

  return (
    <AntdInput.Group
      {...props}
      className={`${className} ${style['custom-input-textarea']}`}
    >
      {children}
    </AntdInput.Group>
  )
}

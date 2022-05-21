function AuthorizedWrapper(props) {
  const { children, config, session, ...other } = props
  const { user } = session
  const visible = config.roles.includes(user.role_id)

  return visible ? <div {...other}>{children}</div> : null
}

export default AuthorizedWrapper

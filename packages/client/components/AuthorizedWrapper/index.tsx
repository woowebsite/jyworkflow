function AuthorizedWrapper(props) {
  const { children, config, session } = props;
  const user = session?.user;
  const visible = config.roles.includes(user?.role_id);

  return <div>{visible && children}</div>;
}

export default AuthorizedWrapper;

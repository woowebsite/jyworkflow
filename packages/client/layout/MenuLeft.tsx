import { useIntl } from 'react-intl';
import Link from 'next/link';

import Menu from 'components/Menu';
import Icon from 'components/Icon';

import style from './style.module.scss';

const { Item, SubMenu } = Menu;

const MenuLeft = props => {
  const { formatMessage } = useIntl();
  const f = id => formatMessage({ id });
  const { session } = props;
  const { user } = session;

  return (
    <Menu
      mode="inline"
      style={{ height: '100%', borderRight: 0 }}
      className={style["menu-left"]}
      defaultSelectedKeys={['users']}
      defaultOpenKeys={['users']}
    >
      {props.data
        .filter(x => x.position === 'left' && x.roles.includes(user.role_id))
        .map((menu, i) => {
          //Group menu
          if (menu.children) {
            return (
              <SubMenu
                key={menu.key}
                icon={<Icon icon={menu.icon} />}
                title={f(menu.title)}
              >
                {menu.children
                  .filter(
                    x => x.visible === true && x.roles.includes(user.role_id),
                  )
                  .map((child, c) => (
                    <Item key={`child-menu-${i}-${c}`}>
                      <Link href={child.url}>{f(child.title)}</Link>
                    </Item>
                  ))}
              </SubMenu>
            );
          } else {
            // Single menu
            return (
              <Item key={menu.key}>
                <Link href={menu.url}>{f(menu.title)}</Link>
              </Item>
            );
          }
        })}
    </Menu>
  );
};

export default MenuLeft;

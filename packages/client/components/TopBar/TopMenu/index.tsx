import React from 'react'
import Link from 'next/link'
import { useIntl } from 'react-intl'

import Menu from 'components/Menu'

import style from '../style.module.scss'

const { Item } = Menu

const TopMenu = ({ data, session }) => {
  const { user } = session
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })
  const filterMenu = data.filter(
    (x) => x.position === 'top' && x.roles.includes(user.role_id)
  )

  return (
    <Menu
      mode='horizontal'
      defaultSelectedKeys={['2']}
      className={style['top-menu']}
    >
      {filterMenu.map((menu, i) => {
        const children = menu.children.filter((x) =>
          x.roles.includes(user.role_id)
        )
        return children.map((child, c) => (
          <Item key={`child-menu-${c}`}>
            <Link href={child.url}>{f(child.title)}</Link>
          </Item>
        ))
      })}
    </Menu>
  )
}

export default TopMenu

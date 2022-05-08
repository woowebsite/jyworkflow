import React from 'react'

import TopMenu from './TopMenu'
import UserMoney from './UserMoney'
import UserProfile from './UserProfile'

import style from './style.module.scss'

function TopBar(props) {
  return (
    <div className={style['top-bar']}>
      <div className={style['logo']} />
      <div className='mr-auto d-none d-sm-block'>
        <TopMenu data={props.data} session={props.session} />
      </div>

      {/* Right */}
      <div className={style['user-profile']}>
        <UserMoney />
        <UserProfile />
      </div>
    </div>
  )
}

export default TopBar

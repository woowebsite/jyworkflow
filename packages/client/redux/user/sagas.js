import { all, takeEvery, put, call, select } from 'redux-saga/effects'
import { notification } from 'antd'
import { JWT_login, JWT_currentAccount, JWT_logout } from 'services/jwt.auth'
import constants from './constants'
import * as actions from './actions'

export function* LOGIN({ payload }) {
  const { email, password } = payload
  const provider = yield select(state => state.settings.authProvider)
  const login = JWT_login
  yield put(actions.setState({
    loading: true
  }))

  const success = yield call(login, email, password)
  yield put({
    type: 'user/LOAD_CURRENT_ACCOUNT',
  })
  if (success) {
    // Router.push('/')
    yield call()
    notification.success({
      message: t('messages.notification.success.loginTitle'),
      description: t('messages.notification.success.loginDesc'),
    })
  }
}

export function* LOAD_CURRENT_ACCOUNT() {
  const provider = yield select(state => state.settings.authProvider)
  const currentAccount = JWT_currentAccount
  yield put(actions.setState({
    loading: true
  }))
  
  const response = yield call(currentAccount)
  if (response) {
    const { uid: id, email, photoURL: avatar } = response
    yield put({
      type: 'user/SET_STATE',
      payload: {
        id,
        name: 'Administrator',
        email,
        avatar,
        role: 'admin',
        authorized: true,
      },
    })
  }
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* LOGOUT() {
  const provider = yield select(state => state.settings.authProvider)
  const logout = JWT_logout
  yield call(logout)
  yield put({
    type: 'user/SET_STATE',
    payload: {
      id: '',
      name: '',
      role: '',
      email: '',
      avatar: '',
      authorized: false,
      loading: false,
    },
  })
}

export default function* rootSaga() {
  yield all([
    takeEvery(constants.LOGIN, LOGIN),
    takeEvery(constants.LOAD_CURRENT_ACCOUNT, LOAD_CURRENT_ACCOUNT),
    takeEvery(constants.LOGOUT, LOGOUT),
    // LOAD_CURRENT_ACCOUNT(), // run once on app load to check user auth
  ])
}

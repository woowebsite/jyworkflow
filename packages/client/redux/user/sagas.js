import { all, takeEvery, put, call, select } from 'redux-saga/effects'

import { JWT_login, JWT_currentAccount, JWT_logout } from 'services/jwt.auth'
import Notification from 'components/Notification';

import constants from './constants'
import * as actions from './actions'

export function* LOGIN({ payload }) {
  const { email, password } = payload
  const login = JWT_login
  yield put(actions.setState({
    loading: true
  }))

  const success = yield call(login, email, password)
  yield put({
    type: 'user/LOAD_CURRENT_ACCOUNT',
  })
  if (success) {
    yield call();
    return <Notification message="loginTitle" description="loginDesc" />;
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
  ])
}

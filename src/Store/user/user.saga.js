import { all, call, put, takeLatest } from "redux-saga/effects"
import { USER_ACTION_TYPE } from "./user.types"
import {
  SignInAuthUserFromEmailAndPassword,
  createAuthUserFromEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
  singInWithGooglePopUp,
  userSignOut,
} from "../../utils/Firebase-Utils/firebase.utils"
import {
  signInFalied,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
} from "./user.actions"

export function* getSnapShotFromUserAuth(userAuth, additionalField) {
  try {
    const userDocSnapShot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalField
    )
    yield put(
      signInSuccess({ id: userDocSnapShot.id, ...userDocSnapShot.data() })
    )
  } catch (error) {
    yield put(signInFalied(error))
  }
}

export function* singInAfterSignUp({ payload: { user, additionalField } }) {
  try {
    yield call(getSnapShotFromUserAuth, user, additionalField)
  } catch (error) {
    yield put(signUpFailed(error))
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserFromEmailAndPassword,
      email,
      password
    )
    yield put(signUpSuccess(user, { displayName }))
  } catch (error) {
    yield put(signUpFailed(error))
  }
}

export function* signOut() {
  try {
    yield call(userSignOut)
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailed(error))
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      SignInAuthUserFromEmailAndPassword,
      email,
      password
    )
    yield call(getSnapShotFromUserAuth, user)
  } catch (error) {
    yield put(signInFalied(error))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(singInWithGooglePopUp)
    yield call(getSnapShotFromUserAuth, user)
  } catch (error) {
    yield put(signInFalied(error))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser)
    if (!userAuth) return
    yield call(getSnapShotFromUserAuth, userAuth)
  } catch (error) {}
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPE.Sign_Up_Start, signUp)
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPE.Sign_Up_Success, singInAfterSignUp)
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPE.Email_Sign_In_Start, signInWithEmail)
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPE.Google_Sign_In_Start, signInWithGoogle)
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPE.Check_User_Session, isUserAuthenticated)
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPE.Sign_Out_Start, signOut)
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ])
}

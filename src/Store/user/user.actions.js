import { createAction } from "../../utils/Reducer-Utils/reducer.utils"
import { USER_ACTION_TYPE } from "./user.types"

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPE.Switch_Current_User, user)
}

export const checkUserSession = () => {
  return createAction(USER_ACTION_TYPE.Check_User_Session)
}

export const googleSignInStart = () => {
  return createAction(USER_ACTION_TYPE.Google_Sign_In_Start)
}
export const emailSignInStart = (email, password) => {
  return createAction(USER_ACTION_TYPE.Email_Sign_In_Start, {email, password})
}
export const signInSuccess = (user) => {
  return createAction(USER_ACTION_TYPE.Sign_In_Success, user)
}
export const signInFalied = (error) => {
  return createAction(USER_ACTION_TYPE.Sign_In_Falied, error)
}

export const signUpStart = (email, password, displayName)=>{
  return createAction(USER_ACTION_TYPE.Sign_Up_Start, {email, password, displayName})
}

export const signUpSuccess = (user, additionalField) =>{
  return createAction(USER_ACTION_TYPE.Sign_Up_Success, {user, additionalField})
}

export const signUpFailed = (error)=>{
  return createAction(USER_ACTION_TYPE.Sign_Up_Failed,error)
}

export const signOutStart = ()=>{
  return createAction(USER_ACTION_TYPE.Sign_Out_Start,)
}

export const signOutSuccess = ()=>{
  return createAction(USER_ACTION_TYPE.Sign_Out_Success,)
}

export const signOutFailed = (error)=>{
  return createAction(USER_ACTION_TYPE.Sign_Out_Failed,error)
}
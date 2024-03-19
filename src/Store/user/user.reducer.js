import { USER_ACTION_TYPE } from "./user.types"

const USER_INITIAL_VALUE = {
  currentUser: null,
  isLoading: false,
  error: null,
}

export const userReducer = (state = USER_INITIAL_VALUE, action) => {
  const { type, payload } = action

  switch (type) {
    case USER_ACTION_TYPE.Sign_In_Success:
      return {
        ...state,
        currentUser: payload,
      }
    
    case USER_ACTION_TYPE.Sign_Out_Success:
      return{
        ...state,
        currentUser:null
      }

    case USER_ACTION_TYPE.Sign_Out_Failed:  
    case USER_ACTION_TYPE.Sign_Up_Failed:  
    case USER_ACTION_TYPE.Sign_In_Falied:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}

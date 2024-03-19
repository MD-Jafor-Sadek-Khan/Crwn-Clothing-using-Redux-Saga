export const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
      return next(action)
    }
  
    console.log("MIDDLEWARE: action type: ", action.type)
    console.log("MIDDLEWARE: action payload: ", action.payload)
    console.log("MIDDLEWARE: Current State: ", store.getState())
  
    next(action)
  
    console.log("MIDDLEWARE: next State: ", store.getState())
  }
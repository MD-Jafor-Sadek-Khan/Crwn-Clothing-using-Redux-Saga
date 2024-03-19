import { createSelector } from "reselect"


const selectUserSlice = (state)=> state.user

export const selectUserIsLoading =  createSelector(
    [selectUserSlice],
    (userSlice) => userSlice.isLoading
)

export const userSelector = createSelector(
    [selectUserSlice],
    (userSlice)=> userSlice.currentUser
)
import { createAction } from "../../utils/Reducer-Utils/reducer.utils"
import { CATEGORIES_ACTIONS_TYPES } from "./category.types"

export const fetchCategoriesStart = () => {
  return createAction(CATEGORIES_ACTIONS_TYPES.Fetch_Categories_Start)
}

export const fetchCategoriesSuccess = (categories) => {
  return createAction(
    CATEGORIES_ACTIONS_TYPES.Fetch_Categories_Success,
    categories
  )
}

export const fetchCategoriesError = (error) => {
  return createAction(CATEGORIES_ACTIONS_TYPES.Fetch_Categories_Error, error)
}


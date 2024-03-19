import { CATEGORIES_ACTIONS_TYPES } from "./category.types"

const CATEGORIES_INITIAL_VALUE = {
  categories: [],
  isLoading: false,
  error: null,
}

export const categoryReducer = (
  state = CATEGORIES_INITIAL_VALUE,
  action = {}
) => {
  const { type, payload } = action

  switch (type) {
    case CATEGORIES_ACTIONS_TYPES.Fetch_Categories_Start:
      return {
        ...state,
        isLoading: true,
      }
    case CATEGORIES_ACTIONS_TYPES.Fetch_Categories_Success:
      return {
        ...state,
        categories: payload,
        isLoading: false,
      }
    case CATEGORIES_ACTIONS_TYPES.Fetch_Categories_Error:
      return {
        ...state,
        error: payload,
        isLoading: false,
      }

    default:
      return state
  }
}

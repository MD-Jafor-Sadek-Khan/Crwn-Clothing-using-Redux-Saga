import { getCategoriesAndDocuments } from "../../utils/Firebase-Utils/firebase.utils"
import { all, call, put, takeLatest } from "redux-saga/effects"
import { CATEGORIES_ACTIONS_TYPES } from "./category.types"
import {
  fetchCategoriesError,
  fetchCategoriesSuccess,
} from "./category.actions"

export function* fetchCategoriesAsync() {
  try {
    const categoryArray = yield call(getCategoriesAndDocuments)
    yield put(fetchCategoriesSuccess(categoryArray))
  } catch (error) {
    yield put(fetchCategoriesError(error))
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTIONS_TYPES.Fetch_Categories_Start,
    fetchCategoriesAsync
  )
}

export function* categorySaga() {
  yield all([call(onFetchCategories)])
}

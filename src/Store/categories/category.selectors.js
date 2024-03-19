import { createSelector } from "reselect"

const selectCategory = (state) => state.categories

export const selectCategoryReducer = createSelector(
  [selectCategory],
  (categoriesSlice) => {
    return categoriesSlice.categories
  }
)

export const categoryMapSelector = createSelector(
  [selectCategoryReducer],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category
      acc[title.toLowerCase()] = items
      return acc
    }, {})
  }
)

export const selectCategoryIsLoading = createSelector(
  [selectCategory],
  (categoriesSlice) => categoriesSlice.isLoading
)

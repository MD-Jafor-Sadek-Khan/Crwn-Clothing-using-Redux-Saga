import { Fragment } from "react"

import { CategoryPreviewProductListContainer } from "./categories-preview.styles.jsx"
import { useSelector } from "react-redux"
import { categoryMapSelector, selectCategoryIsLoading } from "../../Store/categories/category.selectors.js"
import Spinner from "../Spinner/spinner.component.jsx"
const CategoriesPreview = () => {
  const categoryMap = useSelector(categoryMapSelector)

  const isLoading = useSelector(selectCategoryIsLoading)
  return (
    <Fragment>

    {
      isLoading ? <Spinner/> :
      
      (Object.keys(categoryMap).map((category) => {
        const product = categoryMap[category]
        return (
          <CategoryPreviewProductListContainer
            key={category}
            title={category.toUpperCase()}
            products={product}
          />
        )
      }))
    }
    </Fragment>
  )
}

export default CategoriesPreview

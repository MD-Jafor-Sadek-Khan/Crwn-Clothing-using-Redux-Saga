import { useParams } from "react-router-dom"
import "./category.styles.jsx"
import { Fragment, useEffect, useState } from "react"
import ProductCard from "../Product-Card/ProductCard.component"
import {
  CategoryProductListContainer,
  CategoryTitle,
} from "./category.styles.jsx"
import { useSelector } from "react-redux"
import {
  categoryMapSelector,
  selectCategoryIsLoading,
} from "../../Store/categories/category.selectors.js"
import Spinner from "../Spinner/spinner.component.jsx"

const Category = () => {
  const { category } = useParams()
  const categoryMap = useSelector(categoryMapSelector)
  const [products, setProducts] = useState(categoryMap[category])

  useEffect(() => {
    setProducts(categoryMap[category])
  }, [category, categoryMap])

  const isLoading = useSelector(selectCategoryIsLoading)

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>

      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryProductListContainer>
          {products &&
            products.map((product) => {
              return <ProductCard key={product.id} product={product} />
            })}
        </CategoryProductListContainer>
      )}
    </Fragment>
  )
}

export default Category

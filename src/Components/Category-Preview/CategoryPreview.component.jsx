import ProductCard from "../Product-Card/ProductCard.component"
import "./category-preview.styles.jsx"
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./category-preview.styles.jsx"
const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={`${title.toLowerCase()}`}>{title}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview

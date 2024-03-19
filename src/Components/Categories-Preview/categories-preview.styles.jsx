import styled from "styled-components"
import CategoryPreview from "../Category-Preview/CategoryPreview.component"

export const CategoryPreviewProductListContainer = styled(CategoryPreview)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 50px;
`

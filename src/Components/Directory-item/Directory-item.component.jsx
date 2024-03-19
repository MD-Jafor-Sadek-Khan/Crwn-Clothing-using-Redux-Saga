import { useNavigate } from "react-router-dom"
import "./directoryItem-item.styles.jsx"
import {
  BackgroundImageStyled,
  DirectoryItemBodyContainerStyled,
  DirectoryItemContainerStyled,
} from "./directoryItem-item.styles.jsx"

const DirectoryItem = ({ category: { title, imageUrl, route } }) => {
  const navigate = useNavigate()

  const handleRouteChange = (route) => {
    navigate(route)
  }
  return (
    <DirectoryItemContainerStyled onClick={() => handleRouteChange(route)}>
      <BackgroundImageStyled imageurl={imageUrl} />
      <DirectoryItemBodyContainerStyled>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBodyContainerStyled>
    </DirectoryItemContainerStyled>
  )
}

export default DirectoryItem

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './directory-item.styles';
import { useNavigate } from 'react-router-dom';
const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();
  const goToDirectoryHandler = () => {
    navigate(`/shop/${category.title}`);

    console.log(category.title);
  };
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer onClick={goToDirectoryHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;

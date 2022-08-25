import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './directory-item.styles';
import { useNavigate } from 'react-router-dom';
const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  // const goToDirectoryHandler = () => {
  //   navigate(`/shop/${category.title}`);

  //   console.log(category.title);
  // };
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;

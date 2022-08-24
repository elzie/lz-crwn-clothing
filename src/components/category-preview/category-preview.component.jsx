import {
  CategoryPreviewContainer,
  CPTitle,
  CPPreview,
} from './category-preview.styles';
import ProductCard from '../product-card/product-card.component';
const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CPTitle to={`${title}`}>{title.toUpperCase()}</CPTitle>
      </h2>
      <CPPreview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CPPreview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;

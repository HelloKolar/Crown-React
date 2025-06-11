import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        {/* _ is the current item (not used, so written as _)
          idx is the index (position) of the item in the array
          idx < 4 means only keep items at index 0, 1, 2, and 3 (first 4 items) */}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;

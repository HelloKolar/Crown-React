import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        {/* _ is the current item (not used, so written as _)
          idx is the index (position) of the item in the array
          idx < 4 means only keep items at index 0, 1, 2, and 3 (first 4 items) */}
      </div>
    </div>
  );
};

export default CategoryPreview;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from './ProductSlice';

const ProductList = () => {
  const { products, filter } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search products..."
      />
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;


import React from 'react';
import Sort from '../components2/Sort';
import FilterSection from '../components2/FilterSection';
import ProductList from '../components2/ProductList';
import styled from "styled-components";
import { useFilterContext } from '../Context/Filter_Context';

const Products = () => {
  const { Filter_products } = useFilterContext();

  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList products={Filter_products} />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;

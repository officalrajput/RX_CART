import React from "react";
import styled from "styled-components";
import Product from "./Product"; // Ensure Product component is correctly implemented
import { useProductContext } from "../Context/ProductContext"; // Ensure this hook provides isLoading and featureProduct

const FeatureProduct = () => {
  const { isLoading, featureProduct } = useProductContext();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feature Services</div>
        <div className="grid-three-column">
          {featureProduct.map((currElem) => (
            <ProductCard key={currElem.id}>
              <Product {...currElem} />
            </ProductCard>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
    margin: 0 auto;
  }

  .common-heading {
    text-align: center;
    margin-bottom: 4rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
  }

  .grid-three-column {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }

  figure {
    position: relative;
    overflow: hidden;
    margin: 0;
    padding: 0;

    img {
      width: 100%;
      height: auto;
      transition: transform 0.3s ease-in-out;
    }

    &:hover img {
      transform: scale(1.05);
    }

    .caption {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
      border-radius: 10px;
    }
  }

  .card-data {
    padding: 1rem;

    h3 {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.2rem;
      margin: 0;
      margin-bottom: 0.5rem;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
      font-size: 1rem;
      margin: 0;
    }
  }
`;

export default FeatureProduct;

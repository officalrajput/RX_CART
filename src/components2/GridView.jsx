import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper className="section">
      <div className="container grid grid-three-column">
        {products.map((curElem) => (
          <Product key={curElem.id} {...curElem} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 6rem 2rem;

  .container {
    max-width: 120rem;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    align-items: start;
  }

  .grid-three-column {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }

  .card {
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }

    figure {
      position: relative;
      overflow: hidden;
      margin: 0;

      img {
        width: 100%;
        height: 25rem;
        object-fit: cover;
        transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;

        &:hover {
          transform: scale(1.1);
          filter: brightness(80%);
        }
      }

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }

      &:hover::after {
        opacity: 1;
      }
    }

    .card-data {
      padding: 2rem;
      text-align: center;

      h3 {
        color: ${({ theme }) => theme.colors.text};
        text-transform: capitalize;
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
      }

      .card-data--price {
        color: ${({ theme }) => theme.colors.helper};
        font-size: 1.6rem;
        margin-bottom: 1rem;
      }

      .btn {
        display: inline-block;
        margin-top: 1rem;
        padding: 0.8rem 1.6rem;
        border: 0.1rem solid ${({ theme }) => theme.colors.primary};
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary};
        text-transform: uppercase;
        font-size: 1.4rem;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
          background-color: ${({ theme }) => theme.colors.primary};
          color: #fff;
        }
      }
    }
  }
`;

export default GridView;

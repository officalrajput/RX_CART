import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "../Styles/Button";

const ListView = ({ products }) => {
  return (
    <Wrapper className="section">
      <div className="container grid">
        {products.map((curElem) => {
          const { id, name, image, price, description } = curElem;
          return (
            <div className="card grid grid-two-column" key={id}>
              <NavLink to={`/singleproduct/${id}`} className="product-link">
                <figure className="product-image">
                  <img src={image} alt={name} />
                </figure>
                <div className="card-data">
                  <h3>{name}</h3>
                  <p>
                    <FormatPrice price={price} />
                  </p>
                  <p>{description.slice(0, 90)}...</p>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 3.2rem;
  }

  .product-link {
    display: flex;
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .product-link:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  .product-image {
    width: 30%;
    overflow: hidden;
    border-radius: 1rem;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .product-link:hover & img {
      transform: scale(1.1);
    }
  }

  .card-data {
    padding: 1rem;
    width: 70%;

    h3 {
      margin: 1rem 0;
      font-weight: 300;
      font-size: 2rem;
      text-transform: capitalize;
    }

    p {
      margin-bottom: 0.5rem;
    }
  }
`;

export default ListView;

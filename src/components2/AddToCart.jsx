import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { Button } from "../Styles/Button";
import { useCartContext } from "../Context/cart_context";

const AddToCart = ({ product }) => {
  const {addToCart} = useCartContext();
  const { id, colors, stock } = product;

  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Color:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink to="/cart"
      onClick={()=> addToCart(id,color,amount,product)}>
        <Button className="btn" onClick={() => {}}>Add To Cart</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .colors p {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
  }

  .btnStyle {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-left: 0.5rem;
    border: 2px solid #ccc;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      transform: scale(1.1);
    }
  }

  .active {
    border: 2px solid ${({ theme }) => theme.colors.btn};
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .amount-toggle {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      font-size: 1.5rem;
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      &:hover {
        background-color: ${({ theme }) => theme.colors.btn};
        color: #fff;
        transform: translateY(-2px);
      }

      &:active {
        transform: translateY(0);
      }
    }

    .amount-style {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .btn {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.btn};
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    text-align: center;
    text-decoration: none;
    outline: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.btnHover};
      transform: translateY(-2px);
    }

    &:active,
    &:focus {
      transform: translateY(0);
      outline: none;
      border: none;
    }
  }

  @media (max-width: 768px) {
    .colors p {
      flex-direction: column;
      align-items: flex-start;
    }

    .btnStyle {
      margin: 0.5rem 0;
    }

    .amount-toggle {
      flex-direction: column;
      align-items: center;
    }

    .amount-toggle button {
      margin: 0.5rem 0;
    }
  }
`;

export default AddToCart;

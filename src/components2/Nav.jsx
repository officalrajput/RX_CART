import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../Context/cart_context";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../Styles/Button"; // Assuming you have a Button component styled

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const { total_item } = useCartContext();

  const NavWrapper = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 2.4rem;
      align-items: center;
      list-style: none;
      padding: 0;
      margin: 0;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }

      .user-profile {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.black};

        img {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          object-fit: cover;
        }

        .user-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }

      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: ${({ theme }) => theme.colors.helper};
        color: ${({ theme }) => theme.colors.white};
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
      }
    }

    .user-button {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
      border: none;
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.btn};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 5px;
      transition: background-color 0.3s, color 0.3s, border 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.btn};
        color: ${({ theme }) => theme.colors.helper};
        border: 1px solid ${({ theme }) => theme.colors.helper};
      }
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s linear;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 0.3s linear;

        .navbar-link {
          font-size: 4.2rem;
        }
      }

      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }

        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }

      .user-button {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }

      .user-profile {
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        text-align: center;

        img {
          width: 5rem;
          height: 5rem;
        }

        .user-info {
          align-items: center;
        }
      }
    }
  `;

  return (
    <NavWrapper>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{total_item} </span>
            </NavLink>
          </li>

          {isAuthenticated ? (
            <li className="user-profile">
              <img src={user.picture} alt={user.name} />
              <div className="user-info">
                <span>{user.name}</span>
                <span>{user.email}</span>
              </div>
              <Button
                className="user-button"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </Button>
            </li>
          ) : (
            <li>
              <Button
                className="user-button"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </Button>
            </li>
          )}
        </ul>

        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </NavWrapper>
  );
};

export default Nav;

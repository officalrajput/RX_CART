import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../Styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
        </section>
        {/* footer section */}
        <FooterContainer>
          <FooterContent>
            <div className="footer-about">
              <h3>RX Store</h3>
              <p>Your one-stop shop for all your pharmaceutical needs.</p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <FaDiscord className="icons" size={24} /> {/* Adjusted size */}
                <FaInstagram className="icons" size={24} /> {/* Adjusted size */}
                <a
                  href=""
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="icons" size={24} /> {/* Adjusted size */}
                </a>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+919870683630</h3>
            </div>
          </FooterContent>
          <FooterBottom>
            <div className="container">
              <p>&copy; {new Date().getFullYear()} RX Store. All Rights Reserved</p>
              <div>
                <NavLink to="/">PRIVACY POLICY</NavLink>
                <NavLink to="/">TERMS & CONDITIONS</NavLink>
              </div>
            </div>
          </FooterBottom>
        </FooterContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  /* Your existing styles here */
`;

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer_bg};
  padding: 5rem 0;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  max-width: 120rem;
  margin: auto;
  text-align: left;
  padding: 0 2rem;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-columns: 1fr;
  }

  h3 {
    color: ${({ theme }) => theme.colors.white}; /* White text color */
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.white}; /* White text color */
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input[type="email"] {
      width: 100%;
      padding: 1rem;
      margin-bottom: 1rem;
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.white}; /* White text color */
    }
  }

  .footer-social--icons {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;

    a {
      font-size: 2.4rem; /* Increased font size */
      color: ${({ theme }) => theme.colors.white}; /* White text color */
      transition: color 0.3s;

      &:hover {
        color: ${({ theme }) => theme.colors.primary}; /* Adjusted color */
      }
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 3rem;
  padding-top: 3rem;
  color: ${({ theme }) => theme.colors.white}; /* White text color */

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 0;
    }

    a {
      color: ${({ theme }) => theme.colors.white}; /* White text color */
      text-decoration: none;
      margin-right: 1rem;
      transition: color 0.3s;

      &:hover {
        color: ${({ theme }) => theme.colors.primary}; /* Adjusted color */
      }
    }
  }
`;

export default Footer;

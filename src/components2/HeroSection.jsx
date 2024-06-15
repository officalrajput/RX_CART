import React from "react";
import styled from "styled-components";
import { Button } from "../Styles/Button";
import { NavLink } from "react-router-dom";

const HeroSection = ({ myData }) => {
  const { name, images } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1>{name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ea
              officiis velit quam ipsa? Non perferendis distinctio quod
              repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <NavLink to="/">
              <Button>Show Now</Button>
            </NavLink>
          </div>
          {/* our home page Image */}
          <div className="hero-section-image">
            <figure>
              <img src={images} alt="hero-section-photo" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    max-width: 120rem;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    gap: 9rem;
  }

  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }

  .intro-data {
    margin-bottom: 0;
    text-transform: uppercase;
    color: #5138ee;
  }

  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure {
    position: relative;
  }

  figure::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 50%;
    top: -5rem;
    z-index: -1;
  }

  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 5rem;
    }

    .grid-two-column {
      grid-template-columns: 1fr;
    }

    figure::after {
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;

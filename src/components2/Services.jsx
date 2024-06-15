import styled, { keyframes } from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>

          <div className="services-2">
            <div>
              <MdSecurity className="icon" />
              <h3>Non-contact Shipping</h3>
            </div>
            <div>
              <GiReceiveMoney className="icon" />
              <h3>Money-back Guaranteed</h3>
            </div>
          </div>

          <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .grid {
    display: grid;
    gap: 4rem;
  }

  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }

  .services-1,
  .services-2,
  .services-3 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    padding: 3rem;
    position: relative;
    overflow: hidden;
    animation: ${slideIn} 0.5s ease-in-out;
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
  }

  .icon {
    font-size: 3.2rem;
    width: 8rem;
    height: 8rem;
    padding: 1.6rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
    margin-bottom: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container {
      padding: 0 1rem;
    }

    .grid-three-column {
      grid-template-columns: 1fr;
    }

    .services-1,
    .services-2,
    .services-3 {
      margin-bottom: 4rem;
    }
  }
`;

export default Services;

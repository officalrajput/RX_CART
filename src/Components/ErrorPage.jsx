import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the error message animation
const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

// Keyframes for the button animation
const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Styled component for the wrapper
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa; /* Light gray background */
`;

// Styled component for the error container
const ErrorContainer = styled.div`
  text-align: center;
`;

// Styled component for the error message with animation
const ErrorMessage = styled.h1`
  font-size: 48px;
  color: #dc3545; /* Red color for error message */
  margin-bottom: 20px;
  animation: ${shakeAnimation} 0.5s ease infinite; /* Apply animation */
`;

// Styled component for the error description
const ErrorDescription = styled.p`
  font-size: 20px;
  color: #6c757d; /* Dark gray color for description */
`;

// Styled component for the button with animation
const RetryButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff; /* Blue color for button */
  color: #fff; /* White text color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  animation: ${pulseAnimation} 1s ease infinite; /* Apply animation */
`;

const ErrorPage = () => {
  return (
    <Wrapper>
      <ErrorContainer>
        <ErrorMessage>Error 404</ErrorMessage>
        <ErrorDescription>The page you are looking for could not be found.</ErrorDescription>
        <RetryButton onClick={() => window.location.reload()}>Retry</RetryButton>
      </ErrorContainer>
    </Wrapper>
  );
};

export default ErrorPage;

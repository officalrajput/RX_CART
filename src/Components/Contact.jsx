import { useAuth0 } from "@auth0/auth0-react";
import styled, { keyframes } from "styled-components";


const Contact = () => {
  const {isAuthenticated,user} = useAuth0();
  const inputAnimation = keyframes`
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  const btnAnimation = keyframes`
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 2rem;

          input[type="text"],
          input[type="email"],
          textarea {
            padding: 1.5rem;
            border: none;
            border-radius: 2rem;
            font-size: 1.6rem;
            background-color: ${({ theme }) => theme.colors.inputBg};
            color: ${({ theme }) => theme.colors.inputText};
            transition: all 0.3s;
            animation: ${inputAnimation} 1s ease-in-out forwards;

            &:focus {
              outline: none;
              box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.inputFocus};
            }
          }

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            background-color: ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.white};
            padding: 1.5rem;
            border: none;
            border-radius: 2rem;
            font-size: 1.6rem;
            animation: ${btnAnimation} 1s ease-in-out forwards;

            &:hover {
              background-color: ${({ theme }) => theme.colors.btnHover};
              transform: scale(1.05);
            }
          }
        }
      }
    }

    .map-container {
      border-radius: 2rem;
      margin-top: 6rem;
      overflow: hidden;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

      iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3471.7650849869324!2d78.10787912532405!3d29.5232058251901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1shi!2sin!4v1714253641603!5m2!1shi!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xeqdgwnq"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={isAuthenticated ? user.name :""}
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="off"
              value={isAuthenticated ? user.email :""}
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Your Message"></textarea>

            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";
import SingleProduct from "./Components/SingleProduct";
import Cart from "./Components/Cart"; // Correct import for Cart
import ErrorPage from "./Components/ErrorPage";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle/Globalstyle";
import Header from "./components2/Header";

const App = () => {
  const theme = {
    colors: {
      heading: "#1A1A1A",
      text: "rgba(29, 29, 29, 0.8)",
      white: "#fff",
      black: "#212529",
      helper: "#00FF00",
      bg: "linear-gradient(135deg, #8A2BE2, #4B0082)", // Updated background color to a purple gradient
      footer_bg: "#0a1435",
      btn: "rgb(98, 84, 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg, rgb(132, 144, 255) 0%, rgb(98, 189, 252) 100%)",
      shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

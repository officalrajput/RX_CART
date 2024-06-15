import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./Context/ProductContext.jsx";
import { FilterContextProvider } from "./Context/Filter_Context.jsx";
import { CartProvider } from "./Context/cart_context.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-mlsgd7e8x0x65cyl.us.auth0.com";
const clientId = "BtLvIyzX32OKZq58wW192iDt0pNFWTCG";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
);

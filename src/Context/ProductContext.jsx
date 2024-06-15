import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import ProductReducers from "../reducers/ProductReducers";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const initialState = {
  isLoading: false,
  isError: false,
  Product: [],
  featureProduct: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducers, initialState);

  const getProduct = async (API) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(API);
      const result = await response.data;
      dispatch({ type: "SET_API_DATA", payload: result });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleProduct = async (API) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const response = await axios.get(API);
      const singleProduct = await response.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProduct(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };

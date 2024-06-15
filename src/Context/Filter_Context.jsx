import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducers/FilterReducer";

const FilterContext = createContext();

const initialState = {
  Filter_products: [],
  all_products: [],
  grid_view: false,
  sorting_value: "lowest",
  filters:{
    text:"",
    catagory:"all",
    company:"all",
    color:"all",
    maxPrice:0,
    price:0,
    minPrice:0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { Product: products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  //sorting function
  const sorting = () => {
    dispatch({ type: "GET_SORT_VALUE" });
  };

  //Update the filter Values
  const updateFilterValue = (event) =>{
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({type:"UPDATE_FILTERS_VALUE",payload:{name,value}})
  }
   // to clear the filter
   const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  //to sort the product
  useEffect(() => {
    dispatch({type:"FILTER_PRODUCTS"})
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
  }, [state.sorting_value,state.filters]);

  useEffect(() => {
    console.log("Products in useEffect:", products);
    if (Array.isArray(products)) {
      dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    } else {
      console.error("Products is not an array:", products);
    }
  }, [products]);
  //to set grid View
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  //to set list View
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting ,updateFilterValue,clearFilters}}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

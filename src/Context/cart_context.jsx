import { createContext, useReducer ,useContext, useEffect} from "react";
import reducer from "../reducers/cartReducer"

const CartContext = createContext();
const getLoacalCartData = () =>{
    let localCartData = localStorage.getItem("RanuCart");
    if(localCartData.length == 0 )
        {
            return [];
        }
        else{
            
            return JSON.parse(localCartData)
        }

}
const initialState = {
    // cart:[],
    cart:getLoacalCartData(),
    total_item:"",
    total_price:"",
    shipping_fee:5000,

};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, color, amount, product) => {
    dispatch({type:"ADD_TO_CART",payload:{id, color, amount, product}})
  };
  //increment and decrement the product
  const setDecrease = (id)=>{
    dispatch({type:"SET_DECREMENT",payload:id});
  }
  const setIncrease = (id)=>{
    dispatch({type:"SET_INCREMENT",payload:id});
  }
//to Remove the individual item from cart
  const removeItem = (id) =>{
    dispatch({type:"REMOVE_ITEM",payload:id});
  }
  //to clear the cart
  const clearCart = () =>{
    dispatch({type:"CLEAR_CART"})
  }

  //to add the data in localStorage
  //get vs set
  useEffect(()=>{
    dispatch({type:"CART_TOTAL_PRICE"})
    dispatch({type:"CART_TOTAL_ITEM"})
    localStorage.setItem("RanuCart",JSON.stringify(state.cart))
  },[state.cart]);

  return <CartContext.Provider value={{...state,addToCart,removeItem,clearCart,setDecrease,setIncrease}}>{children}</CartContext.Provider>;
};

const useCartContext = ()=>{
    return useContext(CartContext);
}

export { CartProvider ,useCartContext};

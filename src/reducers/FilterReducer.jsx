const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => curElem.price);
      let maxPrice = Math.max(...priceArr);
      return {
        ...state,
        Filter_products: action.payload,
        all_products: action.payload,
        filters: { ...state.filters, maxPrice, price: maxPrice }
      };
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      let userSortValue = document.getElementById("sort");
      let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        sorting_value: sort_value,
      };

    case "SORTING_PRODUCTS":
      let sortedProducts = [...state.Filter_products];

      if (state.sorting_value) {
        sortedProducts.sort((a, b) => {
          switch (state.sorting_value) {
            case "lowest":
              return a.price - b.price;
            case "highest":
              return b.price - a.price;
            case "a-z":
              return a.name.localeCompare(b.name);
            case "z-a":
              return b.name.localeCompare(a.name);
            default:
              return 0;
          }
        });
      }

      return {
        ...state,
        Filter_products: sortedProducts,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];


      const { text, category,company,color ,price} = state.filters;


      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }
      if (category!=="all") {
        tempFilterProduct = tempFilterProduct.filter((currElem) => {
          return currElem.category === category;
        });
      }

      if (company!=="all") {
        tempFilterProduct = tempFilterProduct.filter((currElem) => {
          return currElem.company.toLowerCase() === company.toLowerCase();
        });
      }

      if (color!=="all") {
        tempFilterProduct = tempFilterProduct.filter((currElem) => currElem.colors.includes(color));
      }
      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.price == price
        );
      } else {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.price <= price
        );
      }
      return {
        ...state,
        Filter_products: tempFilterProduct,
      };
      case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          maxPrice: 0,
          price: state.filters.maxPrice,
          minPrice: state.filters.maxPrice,
        },
      };
    default:
      return state;
  }
};

export default FilterReducer;

import React from "react";
import { useFilterContext } from "../Context/Filter_Context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { Filter_products, grid_view } = useFilterContext();

  if (grid_view === true) {
    return <GridView products={Filter_products} />;
  }

  if (grid_view === false) {
    return <ListView products={Filter_products} />;
  }
};

export default ProductList;
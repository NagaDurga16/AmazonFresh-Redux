import { configureStore } from "@reduxjs/toolkit";

import  ProductDetails  from "./ProductSlicer";

export const Store = configureStore({
  reducer: {
    product:ProductDetails,
  },
});
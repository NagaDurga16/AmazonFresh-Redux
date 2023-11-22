import React from "react";
import Home from "./Home";
import ProductView from "./ProductVeiw";
import { Link, Route, Routes } from "react-router-dom";
import CartPage from "./Cart";
import SearchAppBar from "./Header";

export default function AmazonRouting(){
    return(
        <div>
            <div>
          <SearchAppBar/>
            </div>
            <div style={{marginTop:10}}>
            <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products/:id" element={<ProductView/>}></Route>
        <Route path="/cart" element={<CartPage/>}></Route>
       </Routes>
            </div>
        </div>
    )
}
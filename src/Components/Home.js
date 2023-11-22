import { Box, Button, ButtonBase, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCart, decrement, increment } from "../ReduxStore/ProductSlicer";
import { Link } from "react-router-dom";

export default function Home(){
const Products = useSelector((state) => {
    return state.product.PRODUCTS.filter(prod => prod.name.toLowerCase().includes(state.product.query))
});
const dispatch = useDispatch();
//e.preventDefault();


  
return(
        <div>
            
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",paddingLeft:200,paddingRight:100,gap:10}}>
            {Products.map(({image,name,price,id,quantity},i)=>
            (
                
                <Grid  style={{padding:30,border:"2px solid gray"}}>
                    <Box>
                    <Link to={`/products/${i}`}>
                       <img  src={image} style={{height:100,width:100}}/>
                        <p>{name}</p>
                        </Link>
                        <p>{price}</p>
                        <p>Quantity 
                        <Button onClick={() => dispatch(decrement(i))}>-</Button>
                        <span>{quantity}</span>
                        <Button  onClick={() => dispatch(increment(i))}>+</Button>
                        </p>
                        <Button style={{border:"1px solid green",background:"green",color:"black"}} onClick={() => dispatch(createCart(Products[i]))}>ADD TO CART</Button>
                    </Box>
                </Grid>
                
            )
            )}
            {Products.length === 0 && <p>No items found!</p>}
            
       </div>
       </div>
    )

}
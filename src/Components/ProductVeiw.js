import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createCart, decrement, increment, productSelector } from "../ReduxStore/ProductSlicer";
import { Box, Button, Grid } from "@mui/material";
export default function ProductView(){
    const {id} = useParams();
    const product = useSelector(productSelector(id));
    const dispatch = useDispatch();

    return(
        <div>
             <Grid  style={{padding:30,border:"2px solid gray"}}>
                    <Box>
                       <img  src={product.image} style={{height:200,width:200}}/>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <p>Quantity
                        <Button onClick={() => dispatch(decrement(id))}>-</Button>
                        <span>{product.quantity}</span>
                        <Button  onClick={() => dispatch(increment(id))}>+</Button>
                        <Button style={{border:"1px solid blue"}} onClick={() => dispatch(createCart(product))}>ADD TO CART</Button>
                        </p>
                    </Box>
                </Grid>
        </div>
    )
}
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, totalAmount } from "../ReduxStore/ProductSlicer";
export default function CartPage() {
  const cart = useSelector((state) => state.product.Cart);
  const dispatch = useDispatch();
  let total = 0;
  return (
    <div>
      <h2>Shopping Cart</h2>
      <div style={{border:"1px solid black"}}>
      {cart.map(({ image, name, price, id, quantity }, i) => {
        const amount = price * quantity;
        total += amount;
        return (
          <Grid>
            <Box>
              <Grid container>
                <Grid item xs={6}>
                  <img
                    src={image}
                    style={{ height: 50, width: 50, paddingRight: 500 }}
                  />
                  <p style={{ paddingRight: 500 }}>{name}</p>
                  <p style={{ paddingRight: 500 }}>{price}</p>
                </Grid>
                <Grid item xs={6}>
                  <p>
                    Quantity
                    <Button onClick={() => dispatch(decrement(id - 1))}>
                      -
                    </Button>
                    <span>{quantity}</span>
                    <Button onClick={() => dispatch(increment(id - 1))}>
                      +
                    </Button>
                    <span>
                      {amount}
                    </span>
                  </p>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        );
      })}
      </div>
     
      <p><span style={{marginRight:1300}}>Total</span><span style={{paddingRight:250}}>{total}</span></p>
      <hr/>
      <Button style={{border:"2px solid blue", marginTop:50}}>Continue</Button>
    </div>
  );
}

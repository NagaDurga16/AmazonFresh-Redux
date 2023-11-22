import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  Total:0,
  Cart:[],
  query: '',
PRODUCTS:[{image:"https://images-eu.ssl-images-amazon.com/images/I/517Hc7HhtFL._AC_SX184_.jpg",name:"Kellogs chocos",price:500,id:1,quantity:1,},
{image:"https://images-eu.ssl-images-amazon.com/images/I/41CtR6kLUoL._AC_SX184_.jpg",name:"Horlicks",price:400,id:2,quantity:1,},
{image:"https://images-eu.ssl-images-amazon.com/images/I/51dk7kxuN+L._AC_SX184_.jpg",name:"Peanut Butter",price:660,id:3,quantity:1,},
{image:"https://images-eu.ssl-images-amazon.com/images/I/517Hc7HhtFL._AC_SX184_.jpg",name:"Kellogs chocos",price:300,id:4,quantity:1,},
{image:"https://m.media-amazon.com/images/I/61-zRoFrfqL._AC_UL320_.jpg",name:"Salt",price:50,id:5,quantity:1,},
{image:"https://images-eu.ssl-images-amazon.com/images/I/517Hc7HhtFL._AC_SX184_.jpg",name:"Kellogs chocos",price:950,id:6,quantity:1,},
{image:"https://images-eu.ssl-images-amazon.com/images/I/517Hc7HhtFL._AC_SX184_.jpg",name:"Kellogs chocos",price:560,id:7,quantity:1,},
{image:"https://images-eu.ssl-images-amazon.com/images/I/41CtR6kLUoL._AC_SX184_.jpg",name:"Horlicks",price:420,id:8,quantity:1,},
{image:"https://images-eu.ssl-images-amazon.com/images/I/51dk7kxuN+L._AC_SX184_.jpg",name:"Peanut Butter",price:550,id:9,quantity:1,},
{image:"https://images-eu.ssl-images-amazon.com/images/I/517Hc7HhtFL._AC_SX184_.jpg",name:"Kellogs chocos",price:310,id:10,quantity:1,},],};
const ProductDetails= createSlice({
  name: "product",
  initialState,
    reducers: {
        increment: (state,action) => {
            if(state.PRODUCTS[action.payload].quantity === 10){
                return;
            }
            state.PRODUCTS[action.payload].quantity++;
            state.PRODUCTS=[...state.PRODUCTS]
            console.log(state, action.payload);
            const found=state.Cart.find(product=>product.id===state.PRODUCTS[action.payload].id);
            if(found){ 
            found.quantity++;
            state.Cart=[...state.Cart]
            }

          },
          decrement: (state,action) => {
            if(state.PRODUCTS[action.payload].quantity === 0){
                return;
            }
            state.PRODUCTS[action.payload].quantity--;
            state.PRODUCTS=[...state.PRODUCTS]
            const found=state.Cart.find(product=>product.id===state.PRODUCTS[action.payload].id);
            if(found){ 
            found.quantity--;
            state.Cart=[...state.Cart]
            }
          },
          createCart:(state,action)=>{
            
            state.Cart=[...state.Cart,action.payload]
          },
          updateQuery: (state, action) => {
            state.query = action.payload.trim();
          }
         


    }
});
      export const {increment,decrement,createCart, updateQuery} = ProductDetails.actions;

export const productSelector = (id) => (state) => state.product.PRODUCTS[id];

export default ProductDetails.reducer
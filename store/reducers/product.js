import PRODUCTS from '../../data/dummy-data';
 const initalState ={
     availableProducts : PRODUCTS,
     userProducts : PRODUCTS.filter(product => product.ownerId==='u1')
 }


 export default (state=initalState,actions) =>{
     return state;
 }
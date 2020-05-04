import { ADD_TO_CART } from '../actions/cart';
import CartItem from '../../models/cart-item';

const intialState = {
    items: {},
    amount: 0
}


export default (state = intialState, action) => {

    switch (action.type) {
        case ADD_TO_CART: {
            const addedProduct = action.product;
            const addedTitle = action.product.title;
            const addedPrice = action.product.price;
            let newItemCart;
            let newState;
            if (state.items[addedProduct.id]) {
                console.log("hello");
                newItemCart = new CartItem(state.items[addedProduct.id].quantity + 1,
                    state.items[addedProduct.id].productPrice,
                    addedTitle, state.items[addedProduct.id].sum + addedPrice);
                newState = {
                    ...state, items: {
                        ...state.items,
                        [addedProduct.id]: newItemCart,
                     
                    },   amount: state.amount + addedPrice
                }


            }
            else {
                console.log("hi");

                newItemCart = new CartItem(1, addedPrice, addedTitle, addedPrice);
                newState = {
                    ...state, items: {
                        ...state.items,

                        [addedProduct.id]: newItemCart,
                        
                    },amount: state.amount + addedPrice
                }

            }
            return newState;

        }
        default: return state;
    }

}
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find(
        (watch) => watch.product === item.product
      ); //product=_id

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((watch) =>
            watch.product === existItem.product ? item : watch
          ), //product=_id
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    default:
      return state;
  }
};

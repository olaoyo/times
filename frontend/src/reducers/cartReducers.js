import {
  CART_ADD_ITEM,
  CART_INCREASE_QTY,
  CART_DECREASE_QTY,
} from "../constants/cartConstants";

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

    case CART_INCREASE_QTY:
      const productIdAdd = action.payload;

      return {
        ...state,
        cartItems: state.cartItems.map((watch) =>
          watch.product === productIdAdd
            ? { qty: watch.qty++, ...watch }
            : watch
        ), //product=_id
      };

    case CART_DECREASE_QTY:
      const productIdMinus = action.payload;

      return {
        ...state,
        cartItems: state.cartItems.map((watch) =>
          watch.product === productIdMinus && watch.qty > 1
            ? { qty: watch.qty--, ...watch }
            : watch
        ), //product=_id
      };

    default:
      return state;
  }
};

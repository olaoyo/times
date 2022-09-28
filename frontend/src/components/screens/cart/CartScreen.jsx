import CartHead from "./cartHead/CartHead.component";
import CartBody from "./cartBody/CartBody.component";
import CartTotal from "./cartTotal/CartTotal.component"

function CartScreen() {
  return (
    <>
      <CartHead />
      <CartBody />
      <CartTotal />
    </>
  );
}

export default CartScreen;

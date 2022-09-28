import { CartHeadStyles, CartProduct, CartUnitPrice, CartQuantity, CartPrice } from "./CartHead.styles"

function CartHead() {
  return (
    <CartHeadStyles>
      <CartProduct>Product</CartProduct>
      <CartUnitPrice>Unit Price</CartUnitPrice>
      <CartQuantity>Quantity</CartQuantity>
      <CartPrice>Price</CartPrice>
    </CartHeadStyles>
  )
}

export default CartHead
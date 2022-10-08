import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PaymentMethodStyles,
  PaymentMethodHeader,
  PaymentMethodForm,
  PaymentMethodInputAndLabelGrid,
  PaymentMethodLabel,
  PaymentMethodInput,
  PaymentMethodButton,
} from "./PaymentMethod.styles";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../../../checkoutSteps/CheckoutSteps.component";
import { savePaymentMethod } from "../../../../actions/cartActions";

function PaymentMethod() {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  if (!shippingAddress.address) {
    navigate("/login/shipping");
  }

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(savePaymentMethod(paymentMethod))
    navigate("/placeorder");
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 />
      <PaymentMethodStyles>
        <PaymentMethodHeader>Payment Method</PaymentMethodHeader>
        <PaymentMethodForm onSubmit={submitHandler}>
          <PaymentMethodInputAndLabelGrid>
            <PaymentMethodInput
              type="radio"
              label="PayPal or Credit Card"
              id="paypal"
              name="paymentMethod"
              checked
              onChange={(event) => setPaymentMethod(event.target.value)}
              />
              <PaymentMethodLabel>PayPal or Credit Card</PaymentMethodLabel>
          </PaymentMethodInputAndLabelGrid>
          <PaymentMethodButton type="submit">Continue</PaymentMethodButton>
        </PaymentMethodForm>
      </PaymentMethodStyles>
    </>
  );
}

export default PaymentMethod;

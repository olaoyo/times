import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShippingStyles,
  ShippingHeader,
  ShippingForm,
  ShippingInputAndLabelGrid,
  ShippingLabel,
  ShippingInput,
  ShippingButton,
} from "./Shipping.styles";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../../../checkoutSteps/CheckoutSteps.component";
import { saveShippingAddress } from "../../../../actions/cartActions";

function Shipping() {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <>
      <CheckoutSteps step1 step2 />
      <ShippingStyles>
        <ShippingHeader>Shipping</ShippingHeader>
        <ShippingForm onSubmit={submitHandler}>
          <ShippingInputAndLabelGrid>
            <ShippingLabel>Address</ShippingLabel>
            <ShippingInput
              type="text"
              placeholder="Enter Your Address"
              value={address ? address : ""}
              onChange={(event) => setAddress(event.target.value)}
              id="address"
              required
            />
          </ShippingInputAndLabelGrid>
          <ShippingInputAndLabelGrid>
            <ShippingLabel>City</ShippingLabel>
            <ShippingInput
              type="text"
              placeholder="Enter Your City"
              value={city ? city : ""}
              onChange={(event) => setCity(event.target.value)}
              id="city"
              required
            />
          </ShippingInputAndLabelGrid>
          <ShippingInputAndLabelGrid>
            <ShippingLabel>Postal Code</ShippingLabel>
            <ShippingInput
              type="text"
              placeholder="Enter Your Postal Code"
              value={postalCode ? postalCode : ""}
              onChange={(event) => setPostalCode(event.target.value)}
              id="postalCode"
              required
            />
          </ShippingInputAndLabelGrid>
          <ShippingInputAndLabelGrid>
            <ShippingLabel>Country</ShippingLabel>
            <ShippingInput
              type="text"
              placeholder="Enter Your Country"
              value={country ? country : ""}
              onChange={(event) => setCountry(event.target.value)}
              id="country"
              required
            />
          </ShippingInputAndLabelGrid>
          <ShippingButton type="submit">Continue</ShippingButton>
        </ShippingForm>
      </ShippingStyles>
    </>
  );
}

export default Shipping;

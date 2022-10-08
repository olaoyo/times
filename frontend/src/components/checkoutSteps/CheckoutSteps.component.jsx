import { NavLink } from "react-router-dom";
import {
  CheckoutStepsStyles,
  CheckoutStepsItemsGrid,
  CheckoutStepsItemActive,
  CheckoutStepsItemInactive,
  CheckoutStepsArrowActive,
  CheckoutStepsArrowInactive,
} from "./CheckoutSteps.styles";

function CheckoutSteps({ step1, step2, step3, step4 }) {
  return (
    <CheckoutStepsStyles>
      <CheckoutStepsItemsGrid>
        <>
          {step1 ? (
            <NavLink to="/login">
              <CheckoutStepsItemActive>Login</CheckoutStepsItemActive>
            </NavLink>
          ) : (
            <CheckoutStepsItemInactive disabled>
              Login
            </CheckoutStepsItemInactive>
          )}
        </>

        <>
          {step1 ? (
            <CheckoutStepsArrowActive>
              <span className="material-symbols-outlined">
                keyboard_arrow_right
              </span>
            </CheckoutStepsArrowActive>
          ) : (
            <CheckoutStepsArrowInactive>
              <span className="material-symbols-outlined">
                keyboard_arrow_right
              </span>
            </CheckoutStepsArrowInactive>
          )}
        </>

        <>
          {step2 ? (
            <NavLink to="/login/shipping">
              <CheckoutStepsItemActive>Shipping</CheckoutStepsItemActive>
            </NavLink>
          ) : (
            <CheckoutStepsItemInactive disabled>
              Shipping
            </CheckoutStepsItemInactive>
          )}
        </>

        <>
          {step2 ? (
            <CheckoutStepsArrowActive>
              <span className="material-symbols-outlined">
                keyboard_arrow_right
              </span>
            </CheckoutStepsArrowActive>
          ) : (
            <CheckoutStepsArrowInactive>
              <span className="material-symbols-outlined">
                keyboard_arrow_right
              </span>
            </CheckoutStepsArrowInactive>
          )}
        </>

        <>
          {step3 ? (
            <NavLink to="/payment">
              <CheckoutStepsItemActive>Payment</CheckoutStepsItemActive>
            </NavLink>
          ) : (
            <CheckoutStepsItemInactive disabled>
              Payment
            </CheckoutStepsItemInactive>
          )}
        </>

        <>
          {step3 ? (
            <CheckoutStepsArrowActive>
              <span className="material-symbols-outlined">
                keyboard_arrow_right
              </span>
            </CheckoutStepsArrowActive>
          ) : (
            <CheckoutStepsArrowInactive>
              <span className="material-symbols-outlined">
                keyboard_arrow_right
              </span>
            </CheckoutStepsArrowInactive>
          )}
        </>

        <>
          {step4 ? (
            <NavLink to="/placeorder">
              <CheckoutStepsItemActive>Place Order</CheckoutStepsItemActive>
            </NavLink>
          ) : (
            <CheckoutStepsItemInactive disabled>
              Place Order
            </CheckoutStepsItemInactive>
          )}
        </>
      </CheckoutStepsItemsGrid>
    </CheckoutStepsStyles>
  );
}

export default CheckoutSteps;

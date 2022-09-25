import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { listProductDetails } from "../../../../actions/productsActions";

import {
  ProductDetailsPurchaseStyles,
  ProductDetailsPurchaseWatchGrid,
  ProductDetailsPurchaseWatch,
  ProductDetailsPurchaseCirclesGrid,
  ProductDetailsPurchaseCircle,
  ProductDetailsPurchaseTextGrid,
  ProductDetailsPurchaseParagraph,
  ProductDetailsPurchaseHeader2,
  ProductDetailsPurchaseHeader3,
  ProductDetailsPurchaseWatchFaceColor,
  ProductDetailsPurchaseWatchFaceColorParagraph1,
  ProductDetailsPurchaseWatchFaceColorCirclesGrid,
  ProductDetailsPurchaseWatchFaceColorCircle1,
  ProductDetailsPurchaseWatchFaceColorCircle2,
  ProductDetailsPurchaseWatchFaceColorCircle3,
  ProductDetailsPurchaseWatchFaceColorCircle4,
  ProductDetailsPurchaseWatchFaceColorCircle5,
  ProductDetailsPurchaseWatchFaceColorCircle6,
  ProductDetailsPurchaseWatchFaceColorQuantityGrid,
  ProductDetailsPurchaseWatchFaceColorQuantityChange,
  ProductDetailsPurchaseWatchFaceColorQuantity,
  ProductDetailsPurchaseWatchFaceColorParagraph2,
  Buttons,
  BuyNowButton,
  AddToCartButton,
} from "./ProductDetailsPurchase.styles";

import Loader from "../../../loader/Loader.component";
import Message from "../../../message/Message.component";

function ProductDetailsPurchase() {
  const [qty, setQty] = useState(1);
  
  const { productId } = useParams();
  const navigate = useNavigate()
  
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    navigate(`/cart/${productId}?qty=${qty}`);
  };

  const addQtyHandler = () => {
    const addQty = qty + 1;
    setQty(addQty);
  };

  const removeQtyHandler = () => {
    const removeQty = qty - 1;
    qty > 1 ? setQty(removeQty) : setQty(1);
  };

  const qtyChangeHandler = (event) => setQty(event.target.value);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <ProductDetailsPurchaseStyles>
          <ProductDetailsPurchaseWatchGrid>
            <ProductDetailsPurchaseCirclesGrid>
              <ProductDetailsPurchaseCircle />
              <ProductDetailsPurchaseCircle />
              <ProductDetailsPurchaseCircle />
              <ProductDetailsPurchaseCircle />
            </ProductDetailsPurchaseCirclesGrid>
            <ProductDetailsPurchaseWatch src={product.imageDetails} />
          </ProductDetailsPurchaseWatchGrid>
          <ProductDetailsPurchaseTextGrid>
            <ProductDetailsPurchaseParagraph>
              Classic Watches
            </ProductDetailsPurchaseParagraph>
            <ProductDetailsPurchaseHeader2>
              {product.name}
            </ProductDetailsPurchaseHeader2>
            <ProductDetailsPurchaseHeader3>
              ${product.price}
            </ProductDetailsPurchaseHeader3>
            <ProductDetailsPurchaseWatchFaceColor>
              <ProductDetailsPurchaseWatchFaceColorParagraph1>
                Choose Watch face Color
              </ProductDetailsPurchaseWatchFaceColorParagraph1>
              <ProductDetailsPurchaseWatchFaceColorCirclesGrid>
                <ProductDetailsPurchaseWatchFaceColorCircle1 />
                <ProductDetailsPurchaseWatchFaceColorCircle2 />
                <ProductDetailsPurchaseWatchFaceColorCircle3 />
              </ProductDetailsPurchaseWatchFaceColorCirclesGrid>
            </ProductDetailsPurchaseWatchFaceColor>
            <ProductDetailsPurchaseWatchFaceColor>
              <ProductDetailsPurchaseWatchFaceColorParagraph1>
                Choose Watch Belt Color
              </ProductDetailsPurchaseWatchFaceColorParagraph1>
              <ProductDetailsPurchaseWatchFaceColorCirclesGrid>
                <ProductDetailsPurchaseWatchFaceColorCircle4 />
                <ProductDetailsPurchaseWatchFaceColorCircle5 />
                <ProductDetailsPurchaseWatchFaceColorCircle6 />
              </ProductDetailsPurchaseWatchFaceColorCirclesGrid>
            </ProductDetailsPurchaseWatchFaceColor>
            <ProductDetailsPurchaseWatchFaceColor>
              <ProductDetailsPurchaseWatchFaceColorParagraph1>
                Choose Watch Quantity
              </ProductDetailsPurchaseWatchFaceColorParagraph1>
              <ProductDetailsPurchaseWatchFaceColorQuantityGrid>
                <ProductDetailsPurchaseWatchFaceColorQuantityChange
                  onClick={removeQtyHandler}
                >
                  <span className="material-symbols-outlined">remove</span>
                </ProductDetailsPurchaseWatchFaceColorQuantityChange>
                <ProductDetailsPurchaseWatchFaceColorQuantity
                  value={qty}
                  onChange={qtyChangeHandler}
                >
                  {qty}
                </ProductDetailsPurchaseWatchFaceColorQuantity>
                <ProductDetailsPurchaseWatchFaceColorQuantityChange
                  onClick={addQtyHandler}
                >
                  <span className="material-symbols-outlined">add</span>
                </ProductDetailsPurchaseWatchFaceColorQuantityChange>
              </ProductDetailsPurchaseWatchFaceColorQuantityGrid>
            </ProductDetailsPurchaseWatchFaceColor>
            <ProductDetailsPurchaseWatchFaceColorParagraph2>
              {product.description}
            </ProductDetailsPurchaseWatchFaceColorParagraph2>
            <Buttons>
              <BuyNowButton>BUY NOW</BuyNowButton>
              <AddToCartButton onClick={addToCartHandler}>
                ADD TO CART
              </AddToCartButton>
            </Buttons>
          </ProductDetailsPurchaseTextGrid>
        </ProductDetailsPurchaseStyles>
      )}
    </>
  );
}

export default ProductDetailsPurchase;

import { useParams } from "react-router-dom";

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
  ProductDetailsPurchaseWatchFaceColorQuantityChange,
  ProductDetailsPurchaseWatchFaceColorQuantity,
  ProductDetailsPurchaseWatchFaceColorParagraph2,
  Buttons,
  BuyNowButton,
  AddToCartButton,
} from "./ProductDetailsPurchase.styles";

import products from "../../../../products";

function ProductDetailsPurchase() {
  const { productId } = useParams();
  const product = products.find((product) => product._id === productId);

  return (
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
          <ProductDetailsPurchaseWatchFaceColorCirclesGrid>
            <ProductDetailsPurchaseWatchFaceColorQuantityChange>
              <span class="material-symbols-outlined">remove</span>
            </ProductDetailsPurchaseWatchFaceColorQuantityChange>
            <ProductDetailsPurchaseWatchFaceColorQuantity>
              1
            </ProductDetailsPurchaseWatchFaceColorQuantity>
            <ProductDetailsPurchaseWatchFaceColorQuantityChange>
              <span class="material-symbols-outlined">add</span>
            </ProductDetailsPurchaseWatchFaceColorQuantityChange>
          </ProductDetailsPurchaseWatchFaceColorCirclesGrid>
        </ProductDetailsPurchaseWatchFaceColor>
        <ProductDetailsPurchaseWatchFaceColorParagraph2>
          {product.description}
        </ProductDetailsPurchaseWatchFaceColorParagraph2>
        <Buttons>
          <BuyNowButton>BUY NOW</BuyNowButton>
          <AddToCartButton>ADD TO CART</AddToCartButton>
        </Buttons>
      </ProductDetailsPurchaseTextGrid>
    </ProductDetailsPurchaseStyles>
  );
}

export default ProductDetailsPurchase;

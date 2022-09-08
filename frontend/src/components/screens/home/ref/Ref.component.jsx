import {
  RefStyles,
  RefImageWatch,
  RefText,
  RefTextHeader,
  RefParagraph,
  RefButtonGrid,
  RefButton,
} from "./Ref.styles";
import ClassicWatchOne from "../../../../images/home/ref/Classic Watch_1.png";
import ClassicWatchTwo from "../../../../images/home/ref/Classic Watch_2.png";
import ClassicWatchThree from "../../../../images/home/ref/Classic Watch_3.png";

function Ref() {
  return (
    <RefStyles>
      <RefImageWatch src={ClassicWatchOne} />
      <RefImageWatch src={ClassicWatchTwo} />
      <RefImageWatch src={ClassicWatchThree} />
      <RefText>
        <RefTextHeader>The Classic Watch Of Reference.</RefTextHeader>
        <RefParagraph>
          We have never left the limelight. In fact, based on random.
        </RefParagraph>
        <RefButtonGrid>
          <RefButton>VIEW ALL</RefButton>
          <span className="material-symbols-outlined">trending_flat</span>
        </RefButtonGrid>
      </RefText>
    </RefStyles>
  );
}

export default Ref;

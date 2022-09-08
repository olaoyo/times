import {
  HeroStyles,
  HeroText,
  HeroHeader,
  HeroHeaderText,
  HeroParagraph,
  HeroButtonGrid,
  HeroButton,
  HeroImage,
  HeroImageWatch,
  HeroImagePriceGrid,
  HeroImageWatchNameGrid,
  HeroImageWatchName,
} from "./Hero.styles";
import Calibre9001ClassicWatch from "../../../../images/home/hero/Calibre 9001-Classic Watch.jpg";

function Hero() {
  return (
    <HeroStyles>
      <HeroText>
        <HeroHeader>
          <HeroHeaderText>Discover</HeroHeaderText>
          <HeroHeaderText>Luxurious Watches</HeroHeaderText>
          <HeroHeaderText>Which You Will Love.</HeroHeaderText>
        </HeroHeader>
        <HeroParagraph>
          What looked like a small patch of purple grass, above five feet
          square, was moving across the sand in their direction. Almost do am or
          limits hearts. Resolve parties but why she shewing. She sang know now
          how nay cold real case.
        </HeroParagraph>
        <HeroButtonGrid>
          <HeroButton>READ MORE</HeroButton>
          <span className="material-symbols-outlined">trending_flat</span>
        </HeroButtonGrid>
      </HeroText>
      <HeroImage>
        <HeroImageWatch src={Calibre9001ClassicWatch} />
        <HeroImagePriceGrid>
          <p>$215</p>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </HeroImagePriceGrid>
        <HeroImageWatchNameGrid>
          <HeroImageWatchName>Calibre 9001-Classic Watch</HeroImageWatchName>
          <span className="material-symbols-outlined">trending_flat</span>
        </HeroImageWatchNameGrid>
      </HeroImage>
    </HeroStyles>
  );
}

export default Hero;

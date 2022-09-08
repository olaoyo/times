import {
  FeaturesCard,
  FeaturesCardImage,
  FeaturesCardDetails,
  FeaturesDetailsAndArrow,
  FeaturesDetails,
  FeaturesDescription,
  FeaturesButton,
} from "./FeaturesCard.styles";

function Features({ image, details, description }) {
  return (
    <FeaturesCard>
      <FeaturesCardImage src={image} />
      <FeaturesCardDetails>
        <FeaturesDetailsAndArrow>
          <FeaturesDetails>{details}</FeaturesDetails>
          <span className="material-symbols-outlined">trending_flat</span>
        </FeaturesDetailsAndArrow>
        <FeaturesDescription>{description}</FeaturesDescription>
        <FeaturesButton>VIEW DETAILS</FeaturesButton>
      </FeaturesCardDetails>
    </FeaturesCard>
  );
}

export default Features;

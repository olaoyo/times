import { FeaturesStyles, FeaturesHeader, FeaturesParagraph, FeaturesCardGrid } from "./FeaturesCardList.styles";

import Features from "./FeaturesCard.component";

import FeatureWatchOne from "../../../../images/home/features/Feature Watch_1.jpg";
import FeatureWatchTwo from "../../../../images/home/features/Feature Watch_2.jpg";
import FeatureWatchThree from "../../../../images/home/features/Feature Watch_3.jpg";

function FeaturesList() {
  const featureOneDetails = "The Essence Of The Oyster.";
  const featureTwoDetails = "Track Of Time Across The World.";
  const featureThreeDetails = "The Essence Of The Oyster.";

  const featureOneDescription =
    "What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. ";
  const featureTwoDescription =
    "What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. ";
  const featureThreeDescription =
    "What looked like a small patch of purple grass, above five feet square, was moving across the sand   in their direction. ";

  return (
    <FeaturesStyles>
      <FeaturesHeader>FEATURES OF THE TIMES</FeaturesHeader>
      <FeaturesParagraph>We Have Never Left The Limelight. In Fact, Based And Ordinary People Who Loves .</FeaturesParagraph>
      <FeaturesCardGrid>
        <Features image={FeatureWatchOne} details={featureOneDetails} description={featureOneDescription} />
        <Features image={FeatureWatchTwo} details={featureTwoDetails} description={featureTwoDescription} />
        <Features image={FeatureWatchThree} details={featureThreeDetails} description={featureThreeDescription} />
      </FeaturesCardGrid>
    </FeaturesStyles>
  );
}

export default FeaturesList;

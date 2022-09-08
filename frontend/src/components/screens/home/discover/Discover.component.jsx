import {
  DiscoverStyles,
  DiscoverImage,
  DiscoverDetails,
  DiscoverHeader,
  DiscoverDescription,
  DiscoverButtonGrid,
  DiscoverButton,
} from "./Discover.styles";
import DiscoverWatch from "../../../../images/home/discover/Discover Watch.jpg";

function Discover() {
  return (
    <DiscoverStyles>
      <DiscoverImage src={DiscoverWatch} />
      <DiscoverDetails>
        <DiscoverHeader>
          Discover Luxurious Watch Which You Will Love.
        </DiscoverHeader>
        <DiscoverDescription>
          What looked like a small patch of purple grass, above five feet
          square, was moving across the sand in their direction. Almost do am or
          limits hearts. Resolve parties but why she shewing. She sang know now
          how nay cold real case.{" "}
        </DiscoverDescription>
        <DiscoverButtonGrid>
            <DiscoverButton>READ MORE</DiscoverButton>
            <span className="material-symbols-outlined">trending_flat</span>
        </DiscoverButtonGrid>
      </DiscoverDetails>
    </DiscoverStyles>
  );
}

export default Discover;

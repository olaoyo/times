import {
  StatsStyles,
  StatsModel,
  StatsWatch,
  StatsDetails,
  StatsHeader,
  StatsDescription,
  StatsFigures,
  StatsFiguresGrid,
  StatsFiguresNumbers,
  StatsFiguresText,
  StatsButtonGrid,
  StatsButton,
} from "./Stats.styles";

import StatsModelImage from "../../../../images/home/stats/Stats Model.jpg";
import StatsWatchImage from "../../../../images/home/stats/Stats Watch.jpg";

function Stats() {
  return (
    <StatsStyles>
      <StatsModel src={StatsModelImage} />
      <StatsWatch src={StatsWatchImage} />
      <StatsDetails>
        <StatsHeader>Various Amazing Watches That Are Trending.</StatsHeader>
        <StatsDescription>
          What looked like a small patch of purple grass, above five feet
          square, was moving across the snand in their direction.{" "}
        </StatsDescription>
        <StatsFigures>
          <StatsFiguresGrid>
            <StatsFiguresNumbers>1k+</StatsFiguresNumbers>
            <StatsFiguresText>Active Customers</StatsFiguresText>
          </StatsFiguresGrid>
          <StatsFiguresGrid>
            <StatsFiguresNumbers>1.5k+</StatsFiguresNumbers>
            <StatsFiguresText>Finished Shipping</StatsFiguresText>
          </StatsFiguresGrid>
        </StatsFigures>
        <StatsButtonGrid>
            <StatsButton>VIEW DETAILS</StatsButton>
            <span className="material-symbols-outlined">trending_flat</span>
        </StatsButtonGrid>
      </StatsDetails>
    </StatsStyles>
  );
}

export default Stats;

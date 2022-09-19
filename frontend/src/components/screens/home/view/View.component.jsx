import { ViewAllStyles, ViewAllButtonGrid, ViewAllButton } from "./View.styles";

function ViewAll() {
  return (
    <ViewAllStyles>
      <ViewAllButtonGrid>
        <ViewAllButton>VIEW ALL</ViewAllButton>
        <span className="material-symbols-outlined">trending_flat</span>
      </ViewAllButtonGrid>
    </ViewAllStyles>
  );
}

export default ViewAll;

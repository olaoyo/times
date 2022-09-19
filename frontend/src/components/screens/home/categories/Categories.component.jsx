import {
  CategoryStyles,
  CategoryHeader,
  CategoryParagraph,
  CategoriesGrid,
  CategoriesButton,
} from "./Categories.styles";

function Categories() {
  return (
    <CategoryStyles>
      <CategoryHeader>FEATURED CATEGORIES OF TIMES</CategoryHeader>
      <CategoryParagraph>
        What Looked Like A Small Patch Of Purple Grass, Above Five Feet Square,
        Was Moving Across The Sand In Thei.
      </CategoryParagraph>
      <CategoriesGrid>
        <CategoriesButton>ALL TIMES</CategoriesButton>
        <CategoriesButton>MEN TIMES</CategoriesButton>
        <CategoriesButton>WOMEN TIMES</CategoriesButton>
        <CategoriesButton>SPORTS TIMES</CategoriesButton>
        <CategoriesButton>TREND TIMES</CategoriesButton>
      </CategoriesGrid>
    </CategoryStyles>
  );
}

export default Categories;

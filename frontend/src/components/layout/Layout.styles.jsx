import styled from "styled-components";

const LayoutStyles = styled.div`
    display: grid;
    /* grid-template-columns: minmax(14rem, 1fr) repeat(10, minmax(14rem, 14rem)) minmax(14rem, 1fr); */

    grid-template-columns: [left-start] repeat(2, minmax(13rem, auto)) [left-end 
                            center-start] repeat(8, [col-start] minmax(13rem, auto) [col-end]) [center-end 
                            right-start] repeat(2, minmax(13rem, auto)) [right-end]; 
`

export default LayoutStyles;

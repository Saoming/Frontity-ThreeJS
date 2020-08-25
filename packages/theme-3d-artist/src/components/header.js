import React from "react"
import { styled } from "frontity";
import {mediaQueries} from "./breakpoints"
const GlobalHeader = () => {
    return (
     <HeaderStyle>
         <Heading> Hello this is a test </Heading>
    </HeaderStyle> 
    )
}

export default connect(GlobalHeader);

const HeaderStyle = styled.header`

`;

const Heading = styled.h1`
    ${mediaQueries("lg")`
        color: green;
    `}
`;
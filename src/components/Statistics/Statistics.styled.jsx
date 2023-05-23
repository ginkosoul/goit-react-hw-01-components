import styled from "@emotion/styled";
import { getRandomHexColor } from "utils/randomColor";

export const StatSection = styled.section`
    background-color: #fff;
`;

export const Title = styled.h2`
    font-weight: 600;
    font-size: 24px;
    line-height: 1.2;
    text-transform: uppercase;
    color:darkgray;
    background-color: #fff;
    margin: 0;
    padding: 28px;
    text-align: center;
`;

export const StatList = styled.ul`
    display: flex;
    background-color: #fff;
`;
export const Item = styled.li`
    width: 72px;
    padding: 12px 0;
    background-color: ${getRandomHexColor};
    color: white;
`;
export const Label = styled.span`
    display: block;
    margin: auto;
    margin-bottom: 4px;
    font-size: 16px;
    text-align: center;
`
export const Percentage = styled.span`
    display: block;
    font-size: 24px;
    text-align: center;
`
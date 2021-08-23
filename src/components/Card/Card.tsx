import { View } from "react-native";
import styled from "styled-components";
import { IThemeProp } from "../../types";

const defaultShadowRadius = 10;

export const Card = styled(View) <CardProps>`
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.background.primary};
    overflow: hidden;
    shadow-color: #000;
    shadow-offset: 0 10px;
    shadow-opacity: 0.1;
    shadow-radius: ${(props) => props.shadowRadius ? props.shadowRadius : defaultShadowRadius}px;
    elevation: ${(props) => props.shadowRadius ? props.shadowRadius : defaultShadowRadius};
`;

interface CardProps extends IThemeProp {
    shadowRadius?: number,
}
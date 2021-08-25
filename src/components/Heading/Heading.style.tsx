import { View } from "react-native";
import styled from "styled-components";
import { FontSizes, getFontSize } from "../../helpers/theme.helper";
import { Text } from "../Text";

export const HeadingContainer = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2.5% 0;
    overflow: hidden;
`;

export const HeadingSpan = styled(Text)`
    font-size: ${({ theme }) => getFontSize(theme, FontSizes.h5)};
    background-color: rgba(${({ theme }) => theme.colors.ui.primaryRgb},0.2);
    color: ${({ theme }) => theme.colors.ui.primary};
    border-radius: 5px;    
    padding: 0.2% 2%;
    margin-left: 1%;
    overflow: hidden;
`;
import { Animated } from "react-native";
import styled from "styled-components";
import { FontSizes, getFontSize, getSpace, Spaces } from "../../helpers/theme.helper";
import { Text } from "../Text";

export const ButtonContainer = styled(Animated.View)`
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.ui.primary};
    border-color: ${({ theme }) => theme.colors.ui.primary};
    border-width: 1px;
    padding: 2.5% 8%;
    margin-top: ${({ theme }) => getSpace(theme, Spaces.s3)};
`;

export const ButtonText = styled(Text)`
    font-size: ${({ theme }) => getFontSize(theme, FontSizes.button)};
`;
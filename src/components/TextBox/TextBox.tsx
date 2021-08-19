import { TextInput } from "react-native";
import styled from "styled-components";
import { FontSizes, getFontSize } from "../../helpers/theme.helper";


export const TextBox = styled(TextInput)`
    font-family: ${({ theme }) => theme.fonts.body400};
    font-size: ${({ theme }) => getFontSize(theme, FontSizes.body)};
    padding: 1%;
`;
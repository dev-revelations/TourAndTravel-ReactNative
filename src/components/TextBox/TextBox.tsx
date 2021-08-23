import { TextInput } from "react-native";
import styled from "styled-components";
import { FontSizes, getFontSize, getSpace, Spaces } from "../../helpers/theme.helper";


export const TextBox = styled(TextInput)`
    font-family: ${({ theme }) => theme.fonts.body400};
    font-size: ${({ theme }) => getFontSize(theme, FontSizes.body)};
    padding: ${({theme}) => getSpace(theme, Spaces.s2)};    
`;
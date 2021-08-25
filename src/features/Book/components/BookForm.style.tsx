import { View } from "react-native";
import styled from "styled-components";
import { Card } from "../../../components/Card/Card";
import { TextBox } from "../../../components/TextBox/TextBox";
import { getSpace, Spaces } from "../../../helpers/theme.helper";


export const BookFormContainer = styled(Card)`
    flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 50%;
    padding: 5%;
`;

export const BookTextInput = styled(TextBox)`
    width: 100%;
    border-width: 1px;
    color: ${({ theme }) => theme.colors.ui.secondary};
    margin-top: ${({ theme }) => getSpace(theme, Spaces.s1)};
`;
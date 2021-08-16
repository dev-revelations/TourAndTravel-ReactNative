import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";
import { ITheme } from "../../theme";


export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    background-color: ${(props: { theme: ITheme }) => props.theme.colors.background.primary};
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
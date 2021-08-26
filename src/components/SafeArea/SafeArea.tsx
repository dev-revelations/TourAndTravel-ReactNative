import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";
import { IThemeProp } from "../../types";


export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    background-color: ${(props: IThemeProp) => props.theme?.colors.background.primary};
    `;
    // ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
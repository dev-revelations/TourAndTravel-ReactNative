import { View } from "react-native";
import styled from "styled-components";
import { IThemeProp } from "../../types";


export const SlideControlContainer = styled(View)`
    position: relative;
    flex-direction: row;
    background-color: rgba(0, 0, 0, 0.7);
    top: 15%;
    border-radius: 50px;
    padding: 3%;
`;

export const SlideButton = styled(View) <SlideButtonProps>`
    background-color: ${({ selected, theme }) => selected ? theme.colors.ui.primary
        : theme.colors.ui.contrast};
    border-radius: 100px;
    width: 20px;
    height: 20px;
    margin-left: 5px; 
    margin-right: 5px;
`;

interface SlideButtonProps extends IThemeProp {
    selected?: boolean
}
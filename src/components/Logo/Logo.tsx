import React, { FC } from "react";
import { View } from "react-native";
import styled from "styled-components";
import { FontSizes, getFontSize, getSpace, Spaces } from "../../helpers/theme.helper";
import { IThemeProp } from "../../types";
import { Text } from "../Text";

const LogoContainer = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: ${(props) => getSpace(props.theme, Spaces.s1)};
`;

const LogoText = styled(Text) <IThemeProp> `
    font-size: ${(props) => getFontSize(props.theme, FontSizes.h5)};
`;


export const Logo: FC<{}> = () => {

    return (
        <LogoContainer>
            <LogoText accent bold uppercase>t</LogoText>
            <LogoText contrast uppercase bold>ravel</LogoText>
        </LogoContainer>
    );
}
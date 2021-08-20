import React, { FC, useRef } from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";
import { useTheme } from "styled-components";
import { ITheme } from "../../types";
import { ButtonContainer, ButtonText } from "./Button.style";

export const Button: FC = ({ children }) => {

    const theme = useTheme() as ITheme;

    const buttonAnim = useRef(new Animated.Value(0)).current;
    const bgInterpolation = buttonAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [`rgba(${theme.colors.ui.primaryRgb}, 1)`,
        `rgba(${theme.colors.ui.primaryRgb}, 0.2)`]
    });

    const textInterpolation = buttonAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [`rgb(${theme.colors.ui.contrastRgb})`,
        `rgb(${theme.colors.ui.primaryRgb})`]
    });

    const pressIn = () => {
        Animated.timing(buttonAnim, {
            toValue: 1,
            duration: theme.transitionSpeed / 2,
            useNativeDriver: false
        }).start();
    }

    const pressOut = () => {
        Animated.timing(buttonAnim, {
            toValue: 0,
            duration: theme.transitionSpeed / 2,
            useNativeDriver: false
        }).start();
    }

    return (
        <TouchableWithoutFeedback onPressIn={pressIn} onPressOut={pressOut}>
            <ButtonContainer style={{ backgroundColor: bgInterpolation }}>
                <ButtonText contrast centered bold capitalize
                    style={{ color: textInterpolation }}>
                    {children}
                </ButtonText>
            </ButtonContainer>
        </TouchableWithoutFeedback>
    );
}
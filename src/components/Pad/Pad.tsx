import React from 'react';
import { useRef } from 'react';
import { Animated, Pressable, View } from 'react-native';
import styled, { useTheme } from 'styled-components';
import { getSpace, Spaces } from '../../helpers/theme.helper';
import { ITheme } from '../../types';

const PadBox = styled(Animated.View)`
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.background.primary};
    shadow-color: #000;
    shadow-offset: 0 10px;
    shadow-opacity: 0.1;
    shadow-radius: 10px;
    elevation: 10;
    margin: ${({ theme }) => getSpace(theme, Spaces.s3)};
`;

export const Pad = (props: PadProps) => {
    const theme = useTheme() as ITheme;
    const depth = props.shadowDepth || 10;
    const shadowValue = useRef(new Animated.Value(0)).current;
    const opacityValue = shadowValue.interpolate({
        inputRange: [0, depth],
        outputRange: [0, 0.2]
    });
    const pressIn = () => {
        Animated.timing(shadowValue, {
            toValue: depth,
            duration: theme.transitionSpeed,
            useNativeDriver: false
        }).start();
    }

    const pressOut = () => {
        Animated.timing(shadowValue, {
            toValue: 0,
            duration: theme.transitionSpeed,
            useNativeDriver: false
        }).start();
    }

    return (
        <Pressable onPressIn={pressIn} onPressOut={pressOut}>
            <PadBox
                style={{
                    elevation: shadowValue,
                    shadowOpacity: opacityValue,
                    shadowRadius: shadowValue
                }}>
                <View {...props}/>
            </PadBox>
        </Pressable>
    );
}

interface PadProps {
    shadowDepth?: number,
    children: any
}
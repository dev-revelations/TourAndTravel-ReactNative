import React from 'react';
import { useRef } from 'react';
import { Animated, Pressable } from 'react-native';
import styled, { useTheme } from 'styled-components';
import { Text } from '../../components/Text';
import { ITheme } from '../../types';

const PadBox = styled(Animated.View)`
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.background.primary};
    shadow-color: #000;
    shadow-offset: 0 10px;
    shadow-opacity: 0.1;
    shadow-radius: 10px;
    elevation: 10;
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
                <Text>asdsd</Text>
            </PadBox>
        </Pressable>
    );
}

interface PadProps {
    shadowDepth?: number
}
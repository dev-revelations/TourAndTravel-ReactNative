import React, { useRef } from 'react';
import { Animated, Pressable } from 'react-native';
import { useTheme } from 'styled-components';
import { Button } from '../../../components/Button/Button';
import { Text } from '../../../components/Text';
import { ITheme } from '../../../types';
import {
    ImageCard,
    ImageItem,
    ImageInformation,
    ImageTitle
} from './GalleryImageBox.style';


export const GalleryImageBox = (props: GalleryImageBoxProps) => {

    const theme = useTheme() as ITheme;
    const defaultValue = -255;
    const translateValue = useRef(new Animated.Value(defaultValue)).current;

    const displayInfo = (display = false) => {
        Animated.timing(translateValue, {
            toValue: display ? 0 : defaultValue,
            duration: theme.transitionSpeed,
            useNativeDriver: true
        }).start();
    };

    displayInfo(props.showInfo);

    return (
        <ImageCard>
            <Pressable onPress={props.onPress}>
                <ImageItem source={props.image} resizeMode="cover">
                    <ImageInformation
                        style={{ transform: [{ translateY: translateValue }] }}>
                        <ImageTitle contrast title bold capitalize>
                            Amazing Places
                        </ImageTitle>
                        <Text caption contrast centered>
                            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Laboriosam!
                        </Text>
                        <Button>see more</Button>
                    </ImageInformation>
                </ImageItem>
            </Pressable>
        </ImageCard>
    );
}

interface GalleryImageBoxProps {
    showInfo?: boolean;
    onPress?: () => void;
    image: any;
}
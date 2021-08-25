import React from 'react';
import { ViewProps } from 'react-native';
import { Text } from '../../../components/Text';
import { AboutUsBoxContainer } from './AboutUsBox.style';

export const AboutUsBox = (props: AboutUsBoxProps) => {

    return (
        <AboutUsBoxContainer>
            <Text h5 bold contrast capitalize>{props.title}</Text>
            {props.children}
        </AboutUsBoxContainer>
    );
}

interface AboutUsBoxProps extends ViewProps {
    title?: string;
    children: any;
}
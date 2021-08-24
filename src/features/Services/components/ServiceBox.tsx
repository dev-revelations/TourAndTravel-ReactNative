import React from 'react';
import { Text } from '../../../components/Text';
import {
    ServiceBoxContainer,
    ServiceBoxPad,
    ServiceDescription,
    ServiceIcon
} from './ServiceBox.style';

export const ServiceBox = (props: ServiceBoxProps) => {

    return (
        <ServiceBoxContainer>
            <ServiceBoxPad>
                <ServiceIcon name={props.icon} primary larger />
                <Text title capitalize bold centered>
                    {props.title}
                </Text>
                <ServiceDescription centered caption>
                    {props.description}
                </ServiceDescription>
            </ServiceBoxPad>
        </ServiceBoxContainer>
    );
}

interface ServiceBoxProps {
    icon: string,
    title: string,
    description: string
}
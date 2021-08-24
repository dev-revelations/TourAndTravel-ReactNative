import React from 'react';
import { Pad } from '../../../components/Pad/Pad';
import { Text } from '../../../components/Text';
import { ServiceBoxContainer, ServiceIcon, ServiceDescription } from './ServiceBox.style';

export const ServiceBox = (props: ServiceBoxProps) => {

    return (
        <Pad>
            <ServiceBoxContainer>
                <ServiceIcon name={props.icon} primary larger />
                <Text title capitalize bold centered>
                    {props.title}
                </Text>
                <ServiceDescription centered caption>
                    {props.description}
                </ServiceDescription>
            </ServiceBoxContainer>
        </Pad>
    );
}

interface ServiceBoxProps {
    icon: string,
    title: string,
    description: string
}
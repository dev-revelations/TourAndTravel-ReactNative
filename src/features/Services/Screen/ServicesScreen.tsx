import React from 'react';
import { Heading } from '../../../components/Heading/Heading';
import { Screen } from '../../../components/Layouts/Screen';
import { ServiceList } from '../components/ServiceList';


export const ServicesScreen = () => {

    return (
        <Screen>
            <Heading text="services" />
            <ServiceList />
        </Screen>
    );
}
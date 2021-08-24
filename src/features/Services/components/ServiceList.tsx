import React from 'react';
import { ServiceListContainer, ServiceItem } from './ServiceList.style';

const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate optio sint doloribus ullam id quod fuga veniam soluta debitis.';
const serviceList = [
    {
        icon: 'hotel',
        title: 'affordable hotels',
        desc: description
    },
    {
        icon: 'utensils',
        title: 'food and drinks',
        desc: description
    },
    {
        icon: 'bullhorn',
        title: 'safty guide',
        desc: description
    },
    {
        icon: 'globe-asia',
        title: 'around the world',
        desc: description
    },
    {
        icon: 'plane',
        title: 'fastest travel',
        desc: description
    },
    {
        icon: 'hiking',
        title: 'adventures',
        desc: description
    },
];

export const ServiceList = () => {

    return (
        <ServiceListContainer>
            {
                serviceList.map((item, index) => <ServiceItem
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.desc}
                />)
            }
        </ServiceListContainer>
    );
}
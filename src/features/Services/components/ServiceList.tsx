import React from 'react';
import { ServiceListContainer, ServiceItem } from './ServiceList.style';

type Props = {
    services: Service[];
};

export const ServiceList = (props: Props) => {

    return (
        <ServiceListContainer>
            {
                props.services.map((item, index) => <ServiceItem
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.desc}
                />)
            }
        </ServiceListContainer>
    );
};
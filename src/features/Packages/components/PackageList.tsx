import React from 'react';
import { PackageBox } from './PackageBox';
import { PackageListContainer } from './PackageList.style';

export const PackageList = () => {

    const list = [
        {
            image: require('../../../../assets/images/p-1.jpg'),
            title: 'mumbai',
            stars: 4
        },
        {
            image: require('../../../../assets/images/p-2.jpg'),
            title: 'sydney',
            stars: 2
        },
        {
            image: require('../../../../assets/images/p-3.jpg'),
            title: 'hawaii',
            stars: 1
        },
        {
            image: require('../../../../assets/images/p-4.jpg'),
            title: 'paris',
            stars: 3
        },
        {
            image: require('../../../../assets/images/p-5.jpg'),
            title: 'tokyo',
            stars: 5
        },
        {
            image: require('../../../../assets/images/p-6.jpg'),
            title: 'egypt',
            stars: 4
        },
    ];

    return (
        <PackageListContainer>
            {
                list.map((item, index) => <PackageBox
                    key={index}
                    image={item.image}
                    title={item.title}
                    stars={item.stars}
                />)
            }
        </PackageListContainer>
    );
}
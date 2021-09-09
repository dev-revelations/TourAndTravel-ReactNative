import React from 'react';
import { PackageBox } from './PackageBox';
import { PackageListContainer } from './PackageList.style';

type Props = {
    packages: Package[]
}

export const PackageList = (props: Props) => {

    return (
        <PackageListContainer>
            {
                props.packages.map((item, index) => <PackageBox
                    key={index}
                    image={item.image}
                    title={item.title}
                    stars={item.stars}
                />)
            }
        </PackageListContainer>
    );
}
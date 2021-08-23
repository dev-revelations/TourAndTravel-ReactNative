import React from 'react';
import { Button } from '../../../components/Button/Button';
import { Icon } from '../../../components/Icon/Icon';
import { Stars } from '../../../components/Stars/Stars';
import { Text } from '../../../components/Text';
import {
    PackageCard,
    PackageImage,
    PackageContent,
    PackageTitle,
    PackageTitleText,
    PackageContentText,
    PriceContainer,
    PackagePriceRemoved
} from './PackageBox.style';

export const PackageBox = (props: PackageBoxProps) => {
    return (
        <PackageCard>
            <PackageImage resizeMode="cover"
                source={props.image} />
            <PackageContent>
                <PackageTitle>
                    <Icon name="map-marker" primary small />
                    <PackageTitleText bold capitalize>{props.title}</PackageTitleText>
                </PackageTitle>
                <PackageContentText caption>
                    Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Vitae, Quos?
                </PackageContentText>
                <Stars count={props.stars} />
                <PriceContainer>
                    <Text title>£90.00</Text>
                    <PackagePriceRemoved caption>£120.00</PackagePriceRemoved>
                </PriceContainer>
                <Button>book now</Button>
            </PackageContent>
        </PackageCard>
    );
}

interface PackageBoxProps {
    image: any,
    title: string,
    stars: number
}
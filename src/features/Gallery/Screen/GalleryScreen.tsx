import React from 'react';
import { Heading } from '../../../components/Heading/Heading';
import { Screen } from '../../../components/Layouts/Screen';
import { GalleryImageList } from '../components/GalleryImageList';

export const GalleryScreen = () => {

    return (
        <Screen>
            <Heading text="gallery" />
            <GalleryImageList />
        </Screen>
    );
}
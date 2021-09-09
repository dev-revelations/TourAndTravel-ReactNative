import React, { useState } from 'react';
import { GalleryImageBox } from './GalleryImageBox';
import { ImageListContainer } from './GalleryImageList.style';

type Props = {
    images: GalleryImages;
};

export const GalleryImageList = (props: Props) => {

    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <ImageListContainer>
            {
                props.images
                    .map((item, index) => <GalleryImageBox
                        key={index}
                        showInfo={selectedIndex === index}
                        onPress={() => setSelectedIndex(selectedIndex !== index ? index : -1)}
                        image={item}
                    />)
            }
        </ImageListContainer>
    );
};
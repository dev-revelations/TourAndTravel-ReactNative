import React, { useState } from 'react';
import { GalleryImageBox } from './GalleryImageBox';
import { ImageListContainer } from './GalleryImageList.style';


export const GalleryImageList = () => {

    const [selectedIndex, setSelectedIndex] = useState(-1);

    const images = [
        require('../../../../assets/images/g-1.jpg'),
        require('../../../../assets/images/g-2.jpg'),
        require('../../../../assets/images/g-3.jpg'),
        require('../../../../assets/images/g-4.jpg'),
        require('../../../../assets/images/g-5.jpg'),
        require('../../../../assets/images/g-6.jpg'),
        require('../../../../assets/images/g-7.jpg'),
        require('../../../../assets/images/g-8.jpg'),
        require('../../../../assets/images/g-9.jpg'),
    ];

    return (
        <ImageListContainer>
            {
                images
                    .map((item, index) => <GalleryImageBox
                        key={index}
                        showInfo={selectedIndex === index}
                        onPress={()=> setSelectedIndex(selectedIndex !== index ? index : -1)}
                        image={item}
                    />)
            }
        </ImageListContainer>
    );
}
import React, { useEffect, useState } from 'react';
import { BackgroundVideo } from '../../../components/BackgroundVideo/BackgroundVideo';
import { Button } from '../../../components/Button/Button';
import { SlideControl } from '../../../components/SlideControl/SlideControl';
import { BigTitle, HomeScreenContainer, HomeSlideControl } from './HomeScreen.style';
import { Text } from '../../../components/Text';

export const HomeScreen = () => {

    const [vidIndex, setVidIndex] = useState(0);


    const videos = [
        require('../../../../assets/images/vid-1.mp4'),
        require('../../../../assets/images/vid-2.mp4'),
        require('../../../../assets/images/vid-3.mp4'),
        require('../../../../assets/images/vid-4.mp4'),
        require('../../../../assets/images/vid-5.mp4'),
    ];

    useEffect(() => {
        const videoSlideTimer = setInterval(() => {
            setVidIndex((prevIndex) =>
                prevIndex < videos.length - 1 ? prevIndex + 1 : 0);
        }, 10000);

        return () => {
            clearInterval(videoSlideTimer);
        };
    }, []);

    return (
        <BackgroundVideo source={videos[vidIndex]}>
            <HomeScreenContainer>
                <BigTitle h4 contrast bold uppercase centered>
                    adventure is worthwhile
                </BigTitle>
                <Text contrast bold title capitalize centered>
                    discover new places with us, adventure awaits
                </Text>
                <Button>
                    discover more
                </Button>
                <HomeSlideControl
                    selectedIndex={vidIndex}
                    onClick={(index) => setVidIndex(index)}
                    count={videos.length}
                />
            </HomeScreenContainer>
        </BackgroundVideo>
    )
}
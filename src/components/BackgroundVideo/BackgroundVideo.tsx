import React, { FC } from 'react';
import { useWindowDimensions } from 'react-native';
import { VideoContainer, CustomVideo } from './BackgroundVideo.style';

export const BackgroundVideo: FC<BackgroundVideoProps> = ({ source, children }) => {
    const { height } = useWindowDimensions();

    return (
        <VideoContainer screenHeight={height}>
            <CustomVideo
                isLooping
                isMuted
                resizeMode="cover"
                shouldPlay
                source={source}
            />
            {children}
        </VideoContainer>
    );
}

interface BackgroundVideoProps {
    source: any;
}
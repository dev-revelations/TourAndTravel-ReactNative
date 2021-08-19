import { Video } from "expo-av";
import { View } from "react-native";
import styled from "styled-components";

export const VideoContainer = styled(View) <VideoContainerProps> `
    flex: 1;
    position: relative;
    height: ${({ screenHeight }) => screenHeight}px;
`;

export const CustomVideo = styled(Video)`flex: 1;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
`;

interface VideoContainerProps {
    screenHeight: number,
}

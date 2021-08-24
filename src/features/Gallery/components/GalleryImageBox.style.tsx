import { Animated, ImageBackground } from 'react-native';
import styled from 'styled-components';
import { Card } from '../../../components/Card/Card';
import { Text } from '../../../components/Text';
import { FontSizes, getFontSize, getSpace, Spaces } from '../../../helpers/theme.helper';

export const ImageCard = styled(Card)`
flex-grow: 1;
flex-shrink: 1;
flex-basis: 200px;
padding: ${({ theme }) => getSpace(theme, Spaces.s2)};
margin: ${({ theme }) => getSpace(theme, Spaces.s3)};
height: 250px;
`;

export const ImageItem = styled(ImageBackground)`
position: relative;
width: 100%;
height: 100%;
overflow: hidden;
`;

export const ImageInformation = styled(Animated.View)`
background-color: rgba(0, 0, 0, 0.6);
width: 100%;
height:100%;
flex-direction: column;
justify-content: center;
align-items: center;
padding: ${({ theme }) => getSpace(theme, Spaces.s2)};
`;

export const ImageTitle = styled(Text)`
font-size: ${({ theme }) => getFontSize(theme, FontSizes.h5)};
color: ${({ theme }) => theme.colors.ui.primary};
padding: ${({ theme }) => getSpace(theme, Spaces.s3)} 0;
`;
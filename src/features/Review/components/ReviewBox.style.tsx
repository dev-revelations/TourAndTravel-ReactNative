import { Image } from 'react-native';
import styled from 'styled-components';
import { Card } from '../../../components/Card/Card';
import { Text } from '../../../components/Text';


export const ReviewContainer = styled(Card)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin: 32px;
`;

export const ReviewAvatar = styled(Image)`
    width: 64px;
    height: 64px;
    border-radius: 64px;
    margin-bottom: 16px;
`;

export const ReviewText = styled(Text)`
    padding: 16px 0;
    color: ${({ theme }) => theme.colors.text.secondary};
`;
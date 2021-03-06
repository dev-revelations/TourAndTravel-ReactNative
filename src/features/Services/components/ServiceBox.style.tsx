import { View } from 'react-native';
import styled from 'styled-components';
import { Icon } from '../../../components/Icon/Icon';
import { Pad } from '../../../components/Pad/Pad';
import { Text } from '../../../components/Text';
import { getSpace, Spaces } from '../../../helpers/theme.helper';

export const ServiceBoxContainer = styled(View)`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;    
`;

export const ServiceBoxPad= styled(Pad)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => getSpace(theme, Spaces.s2)};
`;

export const ServiceIcon = styled(Icon)`
    padding: ${({ theme }) => getSpace(theme, Spaces.s2)} 0;
`;

export const ServiceDescription = styled(Text)`
    padding: ${({ theme }) => getSpace(theme, Spaces.s2)} 0;
    color: ${({ theme }) => theme.colors.text.secondary};
`;
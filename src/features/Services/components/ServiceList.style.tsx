import { View } from 'react-native';
import styled from 'styled-components';
import { getSpace, Spaces } from '../../../helpers/theme.helper';
import { ServiceBox } from './ServiceBox';

export const ServiceListContainer = styled(View)`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: ${({ theme }) => getSpace(theme, Spaces.s3)};
`;

export const ServiceItem = styled(ServiceBox)`
    flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px; 
`;
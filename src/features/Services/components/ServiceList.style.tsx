import { View } from 'react-native';
import styled from 'styled-components';
import { getSpace, Spaces } from '../../../helpers/theme.helper';
import { ServiceBox } from './ServiceBox';

export const ServiceListContainer = styled(View)`
    flex: 1;
    padding-top: ${({theme}) => getSpace(theme, Spaces.s3)};
    flex-direction: row;
    flex-basis: 200px;
    flex-flow: row wrap;
    flex-wrap: wrap;
    justify-content: space-around;
    min-height: 200px;
`;

export const ServiceItem = styled(ServiceBox)`
    flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px; 
`;
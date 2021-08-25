import { View } from 'react-native';
import styled from 'styled-components';
import { getSpace, Spaces } from '../../../helpers/theme.helper';

export const AboutUsContainer = styled(View)`
    background-color: ${({ theme }) => theme.colors.ui.secondary};
    padding: ${({ theme }) => getSpace(theme, Spaces.s3)};
    padding-bottom: ${({ theme }) => getSpace(theme, Spaces.s4)};
    margin-top: ${({ theme }) => getSpace(theme, Spaces.s4)};
`;

export const HorizontalLine = styled(View)`
    background-color: ${({ theme }) => theme.colors.ui.tertiary};
    height: 2px;
    width: 100%;
    margin-top: ${({ theme }) => getSpace(theme, Spaces.s3)};
    margin-bottom: ${({ theme }) => getSpace(theme, Spaces.s3)};
`;
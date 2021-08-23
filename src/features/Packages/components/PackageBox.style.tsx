import styled from 'styled-components';
import { Image, View } from 'react-native';
import { Card } from "../../../components/Card/Card";
import { getSpace, Spaces } from '../../../helpers/theme.helper';
import { Text } from '../../../components/Text';

export const PackageCard = styled(Card)`
    flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
    margin: ${({ theme }) => getSpace(theme, Spaces.s3)};
`;

export const PackageImage = styled(Image)`
    height: 150px;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

export const PackageContent = styled(View)`
    padding: 4%;
`;

export const PackageTitle = styled(View)`
    flex-direction: row;
    justify-content: flex-start;
`;

export const PackageTitleText = styled(Text)`
    padding-left: ${({ theme }) => getSpace(theme, Spaces.s2)};
    text-align-vertical: center;
`;

export const PackageContentText = styled(Text)`
    padding-top: ${({ theme }) => getSpace(theme, Spaces.s1)};
    padding-bottom: ${({ theme }) => getSpace(theme, Spaces.s1)};
    color: ${({ theme }) => theme.colors.text.secondary};
`;

export const PriceContainer = styled(View)`
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
    padding-top: ${({ theme }) => getSpace(theme, Spaces.s1)};
    padding-bottom: ${({ theme }) => getSpace(theme, Spaces.s1)};
`;

export const PackagePriceRemoved = styled(Text)`
    padding-left: ${({ theme }) => getSpace(theme, Spaces.s1)};
    text-align-vertical: bottom;
    text-decoration: line-through;
    color: ${({ theme }) => theme.colors.text.secondary};
`;
import { View } from 'react-native';
import styled from 'styled-components';
import { getSpace, Spaces } from '../../../helpers/theme.helper';

export const AboutUsBoxContainer = styled(View)`
    flex-direction: column;
    padding: ${({ theme }) => `${getSpace(theme, Spaces.s2)} ${getSpace(theme, Spaces.s0)}`};
`;
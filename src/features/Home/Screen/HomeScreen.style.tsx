import { View } from "react-native";
import styled from "styled-components";
import { Text } from '../../../components/Text';

export const HomeScreenContainer = styled(View)`
    flex: 1;
    flex-direction: column;
    align-items: center;
    top: 30%;
`;

export const BigTitle = styled(Text)`
    font-size: 30px;
    line-height: 45px;
`;
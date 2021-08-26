import { View } from "react-native";
import styled from "styled-components";
import { SlideControl } from "../../../components/SlideControl/SlideControl";
import { Text } from '../../../components/Text';

export const HomeScreenContainer = styled(View)`
    flex: 1;
    flex-direction: column;
    align-items: center;
    top: 15%;
`;

export const BigTitle = styled(Text)`
    line-height: 45px;
`;

export const HomeSlideControl = styled(SlideControl)`
    position: relative;
    top: 15%;
`;


import { View } from "react-native";
import styled from "styled-components";
import { getSpace, Spaces } from "../../helpers/theme.helper";

export const InputContainer = styled(View)`
    padding: ${({ theme }) => `${getSpace(theme, Spaces.s1)} ${getSpace(theme, Spaces.s0)}`};
`;
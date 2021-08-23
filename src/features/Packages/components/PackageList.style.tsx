import { View } from "react-native";
import styled from "styled-components";
import { getSpace, Spaces } from "../../../helpers/theme.helper";

export const PackageListContainer = styled(View)`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    min-height: 200px;
    padding-top: ${({ theme }) => getSpace(theme, Spaces.s3)};
`;
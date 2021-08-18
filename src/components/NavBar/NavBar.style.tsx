import { Animated, TextInput, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { getSpace, responsiveSpace, Spaces } from "../../helpers/theme.helper";
import { IThemeProp } from "../../types";
import { Icon } from "../Icon/Icon";

export const Header = styled(View) <IThemeProp>`
    z-index: 1000;
    position: relative;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.ui.secondary};
    padding-top: ${({ theme }) => getSpace(theme, Spaces.s2)};
    padding-bottom: ${({ theme }) => getSpace(theme, Spaces.s2)};
    padding-left: ${({ theme }) => `${responsiveSpace(theme).s1}%`};
    padding-right: ${({ theme }) => `${responsiveSpace(theme).s1}%`};
`;

export const NavBarItemsContainer = styled(View) <IThemeProp> `
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const NavButtons = styled(View) <IThemeProp> `
    flex: 2;
    align-items: flex-end;
    justify-content: space-evenly;    
    flex-direction: row;
    height: 100%;
`;

export const Touchable = styled(TouchableOpacity)`
    height: 100%;
    padding: 8px;
    align-items: center;
    min-width: 40px;
`;

export const LogoContainer = styled(View)`
    flex: 6;
    justify-content: center;
    align-items: center;
`;

export const SearchBarContainer = styled(Animated.View) <IThemeProp> `
    z-index: 1001;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: 64px;
    margin-top: 4%;
    background-color: ${({ theme }) => theme.colors.ui.secondary};
    overflow: hidden;
    border-top-width: 1px;
    border-top-color: rgba(255, 255, 255, 0.2);
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 3%;
    padding-right: 3%;
`;

export const SearchBar = styled(TextInput)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.ui.contrast};
    border-radius: 5px;
    margin-right: ${({ theme }) => getSpace(theme, Spaces.s3)};
    padding: 1%;
`;

export const BarsIcon = styled(Icon)`
  border-color: ${({ theme }) => theme.colors.ui.contrast};
  border-radius: 5px;
  border-width: 1px;
  padding-top: 5px;
  padding-bottom: 3px;
  padding-left: 12px;
  padding-right: 10px;
`;
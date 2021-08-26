import { Animated, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { getSize, getSpace, responsiveSpace, Sizes, Spaces } from "../../helpers/theme.helper";
import { IThemeProp } from "../../types";
import { Icon } from "../Icon/Icon";
import { TextBox } from "../TextBox/TextBox";

export const Header = styled(View) <IThemeProp>`
    z-index: 1000;
    position: relative;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.ui.secondary};
    padding-top: ${({ theme }) => getSpace(theme, Spaces.s2)};
    padding-bottom: ${({ theme }) => getSpace(theme, Spaces.s0)};
    padding-left: ${({ theme }) => `${responsiveSpace(theme).s1}%`};
    padding-right: ${({ theme }) => `${responsiveSpace(theme).s1}%`};
    height: ${({ theme }) => getSize(theme, Sizes.large)};
`;

export const NavBarItemsContainer = styled(View) <IThemeProp> `
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const NavButtons = styled(View) <IThemeProp> `
    flex: 2;
    align-items: center;
    justify-content: space-evenly;    
    flex-direction: row;
    height: 100%;
`;

export const Touchable = styled(TouchableOpacity)`
    height: 100%;    
    justify-content: center;
    align-items: center;
    min-width: 40px;
    margin-right: ${({ theme }) => getSpace(theme, Spaces.s3)};
`;

export const LogoContainer = styled(View)`
    flex: 6;
    justify-content: center;
    align-items: center;
`;

export const SearchBarContainer = styled(Animated.View) <IThemeProp> `
    z-index: 1001;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 0px;    
    background-color: ${({ theme }) => theme.colors.ui.secondary};
    overflow: hidden;
    border-top-width: 1px;
    border-top-color: rgba(255, 255, 255, 0.2);
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 3%;
    padding-right: 3%;
    display: none;
`;

export const SearchBar = styled(TextBox)`
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
import React, { useContext, useRef, useState } from "react";
import { Animated, ViewProps } from "react-native";
import { SafeAreaFrameContext, useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "styled-components";
import { responsiveSize } from "../../helpers/theme.helper";
import { ITheme } from "../../types";
import { Icon } from "../Icon/Icon";
import { Logo } from "../Logo/Logo";
import {
    BarsIcon,
    Header,
    LogoContainer,
    MenuContainer,
    NavBarItemsContainer,
    NavButtons,
    SearchBar,
    SearchBarContainer,
    Touchable
} from "./NavBar.style";

export const NavBar = (props: NavBarProps) => {

    const [searchBarOpen, setSearchBarOpen] = useState(false);
    const [displaySearchBar, setDisplaySearchBar] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [displayMenu, setDisplayMenu] = useState(false);

    const theme = useTheme() as ITheme;

    const safeareaInsets = useSafeAreaInsets();
    const frame = useContext(SafeAreaFrameContext);

    const menuSize = frame ? frame.height : 500;
    const searchBarSize = responsiveSize(theme).large || 64;
    const speed = theme.transitionSpeed;

    const clipAnim = useRef(new Animated.Value(0)).current;
    const menuAnim = useRef(new Animated.Value(0)).current;

    const animateSearchBar = (open = true) => {
        if (menuOpen)
            animateMenu(false);

        setSearchBarOpen(open);
        if (open) {
            setDisplaySearchBar(true);
        }

        Animated.timing(clipAnim, {
            toValue: open ? searchBarSize : 0,
            duration: speed,
            useNativeDriver: false
        }).start(() => {
            if (!open) {
                setDisplaySearchBar(false);
            }
        });
    }

    const animateMenu = (open = true) => {
        if (searchBarOpen)
            animateSearchBar(false);
        setMenuOpen(open);
        if (open) {
            setDisplayMenu(true);
        }

        Animated.timing(menuAnim, {
            toValue: open ? menuSize : 0,
            duration: speed,
            useNativeDriver: false
        }).start(() => {
            if (!open) {
                setDisplayMenu(false);
            }
        });
    }

    return (
        <>
            <Header>
                <NavBarItemsContainer>
                    <NavButtons>
                        <Touchable onPress={() => animateMenu(!menuOpen)}>
                            <BarsIcon name={menuOpen ? 'times' : 'bars'} contrast small />
                        </Touchable>
                    </NavButtons>
                    <LogoContainer>
                        <Logo />
                    </LogoContainer>
                    <NavButtons>
                        <Touchable onPress={() => animateSearchBar(!searchBarOpen)}>
                            <Icon name={searchBarOpen ? 'times' : 'search'} contrast small />
                        </Touchable>
                        <Touchable onPress={() => animateSearchBar(false)}>
                            <Icon name="user" solid contrast small />
                        </Touchable>
                    </NavButtons>
                </NavBarItemsContainer>
            </Header >
            <SearchBarContainer
                style={[
                    { height: clipAnim },
                    { display: displaySearchBar ? 'flex' : 'none' },
                    {
                        top: safeareaInsets.top + searchBarSize,
                        left: safeareaInsets.left,
                        right: safeareaInsets.right
                    }
                ]}>
                <SearchBar placeholder="Search..." />
                <Icon name="search" contrast />
            </SearchBarContainer >
            <MenuContainer style={[
                {
                    top: safeareaInsets.top + searchBarSize,
                    left: safeareaInsets.left,
                    right: safeareaInsets.right
                },
                { height: menuAnim },
                { display: displayMenu ? 'flex' : 'none' },
            ]}>
                {props.menu}
            </MenuContainer>
        </>
    );
}

interface NavBarProps extends ViewProps {
    menu?: any;
}
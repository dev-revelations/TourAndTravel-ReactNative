import React, { useRef, useState } from "react";
import { Animated, TextInput } from "react-native";
import { useTheme } from "styled-components";
import { responsiveSize } from "../../helpers/theme.helper";
import { ITheme } from "../../types";
import { Icon } from "../Icon/Icon";
import { Logo } from "../Logo/Logo";
import { BarsIcon, Header, LogoContainer, NavBarItemsContainer, NavButtons, SearchBar, SearchBarContainer, Touchable } from "./NavBar.style";

export const NavBar = ({ }) => {

    const [searchBarOpen, setSearchBarOpen] = useState(false);
    const [displaySearchBar, setDisplaySearchBar] = useState(false);

    const theme = useTheme() as ITheme;
    const searchBarSize = responsiveSize(theme).large;
    const speed = theme.transitionSpeed;
    const clipAnim = useRef(new Animated.Value(0)).current;
    const searchBarRef = useRef<TextInput>();

    const animateSearchBar = (open = true) => {
        setSearchBarOpen(open);
        if (open) {
            setDisplaySearchBar(true);
            searchBarRef.current?.focus();
        } else {
            searchBarRef.current?.clear();
            searchBarRef.current?.blur();
        }
        Animated.timing(clipAnim, {
            toValue: open ? searchBarSize || 64 : 0,
            duration: speed,
            useNativeDriver: false
        }).start(() => {
            if (!open) {
                setDisplaySearchBar(false);
            }
        });
    }

    return (
        <Header>
            <NavBarItemsContainer>
                <NavButtons>
                    <Touchable onPress={() => animateSearchBar(true)}>
                        <BarsIcon name="bars" contrast small />
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
            <SearchBarContainer
                style={[
                    { height: clipAnim },
                    { display: displaySearchBar ? 'flex' : 'none' }
                ]}>
                <SearchBar placeholder="Search..." ref={searchBarRef} />
                <Icon name="search" contrast />
            </SearchBarContainer >
        </Header >
    );
}
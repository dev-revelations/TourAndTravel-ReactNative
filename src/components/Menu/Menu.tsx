import React from 'react';
import { View, ViewProps } from 'react-native';
import styled from 'styled-components';
import { Text } from '../Text';

export const Menu = (props: MenuProps) => {

    return (
        <MenuContainer>
            {
                props.menuItems
                && props.menuItems.map((item, index) =>
                    <MenuItem key={index}>
                        <Text capitalize contrast title>{item}</Text>
                    </MenuItem>
                )
            }
        </MenuContainer>
    );
}

interface MenuProps extends ViewProps {
    menuItems: Array<string>
}

const MenuContainer = styled(View)`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 16px 32px;
    width: 100%;
    height: 100%;
`;

const MenuItem = styled(View)`
    flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 300px;
    flex-direction: column;
    justify-content: center;
    padding: 8px;
    padding-left: 16px;
    margin-top: 8px;
    margin-left: 8px;
    margin-right: 8px;
    background-color: ${({ theme }) => theme.colors.ui.secondaryShade};
    border-radius: 5px;
    overflow: hidden;
`;
import React from 'react';
import { View, ViewProps } from 'react-native';
import styled from 'styled-components';

export const Col = styled(View) <ColProps>`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: ${({ basis }) => basis || 350}px;
`;

interface ColProps extends ViewProps {
    basis?: number;
}
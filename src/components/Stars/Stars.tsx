import React from 'react';
import { FC } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { Icon } from '../Icon/Icon';

const StarsContainer = styled(View)`
    flex-direction: row;
`;

export const Stars: FC<StarsProps> = (props: StarsProps) => {
    const filledStars = props.count > 5 ? 5 : props.count < 0 ? 0 : props.count;
    const emptyStars = (5 - props.count) < 0 || props.count < 0 ? 5 : 5 - props.count;

    return (
        <StarsContainer>
            {
                [
                    Array(filledStars).fill(0)
                        .map((v, i) => <Icon name="star" solid key={i} primary smaller />),
                    Array(emptyStars).fill(0)
                        .map((v, i) => <Icon name="star" regular key={i} primary smaller />)
                ]
            }
        </StarsContainer>
    );
}

interface StarsProps {
    count: number
}

enum StarsNumber {
    one = 1,
    two = 2,
    three = 3,
    four = 4,
    five = 5
}
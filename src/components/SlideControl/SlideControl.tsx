import React, { FC } from "react";
import { TouchableWithoutFeedback } from 'react-native';
import { SlideControlContainer, SlideButton } from "./SlideControl.style";

export const SlideControl: FC<SlideControlProps> = ({ onClick, selectedIndex, count }) => {

    return (
        <SlideControlContainer>
            {
                Array(count).fill(0)
                    .map((item, index) => (
                        <TouchableWithoutFeedback key={index} onPress={() => onClick(index)}>
                            <SlideButton selected={selectedIndex === index} />
                        </TouchableWithoutFeedback>
                    ))
            }
        </SlideControlContainer>
    );
}

interface SlideControlProps {
    onClick: { (selectedIndex: number): void },
    selectedIndex: number,
    count: number;
}
import React, { FC } from "react";
import { ViewProps } from "react-native";
import { TouchableWithoutFeedback } from 'react-native';
import { SlideControlContainer, SlideButton } from "./SlideControl.style";

export const SlideControl: FC<SlideControlProps> = (props) => {

    const { onClick, selectedIndex, count } = props;
    
    return (
        <SlideControlContainer {...props}>
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

interface SlideControlProps extends ViewProps {
    onClick: { (selectedIndex: number): void },
    selectedIndex: number,
    count: number;
}
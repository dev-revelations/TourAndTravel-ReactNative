import React, { FC } from "react";
import { Text } from "../Text";
import { HeadingContainer, HeadingSpan } from "./Heading.style";


export const Heading: FC<HeadingProps> = ({ text }) => {
    const words = text.split(' ');

    return (
        <HeadingContainer>
            {
                words.map((word, wIndex) => [
                    word.split('')
                        .map((char, cIndex) =>
                            (<HeadingSpan key={cIndex} uppercase bold>{char}</HeadingSpan>)
                        ),
                    <Text key={wIndex}>  </Text>
                ])
            }
        </HeadingContainer>
    );
}

interface HeadingProps {
    text: string
}
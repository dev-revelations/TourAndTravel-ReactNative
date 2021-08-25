import React from 'react';
import { Stars } from '../../../components/Stars/Stars';
import { Text } from '../../../components/Text';
import { ReviewContainer, ReviewAvatar, ReviewText } from './ReviewBox.style';

export const ReviewBox = (props: ReviewBoxProps) => {

    return (
        <ReviewContainer>
            <ReviewAvatar
                source={props.image}
                resizeMode="cover" />
            <Text bold title capitalize centered>
                John Doe
            </Text>
            <ReviewText caption centered>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor unde cumque provident iure enim. Vel, magni ullam ad reiciendis nam odio velit laborum iusto error voluptates pariatur blanditiis sed asperiores consequatur officia? Atque tempore quia vel non molestiae, temporibus reiciendis.
            </ReviewText>
            <Stars count={4} />
        </ReviewContainer>
    );
}

interface ReviewBoxProps {
    image?: any;
}
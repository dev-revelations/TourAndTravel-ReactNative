import React from 'react';
import { Heading } from '../../../components/Heading/Heading';
import { Screen } from '../../../components/Layouts/Screen';
import { ReviewBox } from '../components/ReviewBox';
import { ReviewSwiper } from './ReviewScreen.style';


export const ReviewScreen = () => {

    const reviewAvatars = [
        require('../../../../assets/images/pic1.png'),
        require('../../../../assets/images/pic2.png'),
        require('../../../../assets/images/pic3.png'),
        require('../../../../assets/images/pic4.png'),
    ];

    return (
        <Screen>
            <Heading text="review" />
            <ReviewSwiper
                showsPagination={false}
                autoplay
                loop
            >
                {
                    reviewAvatars
                        .map((item, index) => <ReviewBox key={index} image={item} />)
                }
            </ReviewSwiper>
        </Screen>
    );
}
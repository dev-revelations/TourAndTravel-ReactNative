import React, { useEffect } from 'react';
import { Heading } from '../../../components/Heading/Heading';
import { Screen } from '../../../components/Layouts/Screen';
import { ReviewBox } from '../components/ReviewBox';
import { ReviewSwiper } from './ReviewScreen.style';
import { connect } from 'react-redux';
import { RootState } from '../../../redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { fetchReviewsAsync } from '../../../redux/review/reviewActions';

interface StateProps {
    reviews: Reviews;
}

interface DispatchProps {
    fetchReviews: () => void;
}

type Props = StateProps & DispatchProps;

const ReviewScreen = (props: Props) => {

    useEffect(() => {
        props.fetchReviews();
    }, []);

    const loaded = props.reviews && props.reviews.length > 0;


    const Swiper = () => <ReviewSwiper
        showsPagination={false}
        autoplay
        loop>
        {
            props.reviews
                .map((item, index) => <ReviewBox key={index} image={item} />)
        }
    </ReviewSwiper>;

    return (
        <Screen>
            <Heading text={loaded ? "review" : "loading..."} />
            {
                loaded && <Swiper />
            }
        </Screen>
    );
};

const mapStateToProps = (state: RootState): StateProps => {
    return {
        reviews: state.review.reviewList
    };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => {
    return bindActionCreators({
        fetchReviews: fetchReviewsAsync
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewScreen);
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { BackgroundVideo } from '../../../components/BackgroundVideo/BackgroundVideo';
import { Button } from '../../../components/Button/Button';
import { Text } from '../../../components/Text';
import { fetchVideosAsync, RootState } from '../../../redux';
import { BigTitle, HomeScreenContainer, HomeSlideControl } from './HomeScreen.style';

interface OwnProps { };
interface DispatchProps {
    fetchVideos: () => void
}
interface StateProps {
    videos: Array<any>
}

type Props = StateProps & DispatchProps & OwnProps;

const HomeScreen = (props: Props) => {
    const videos = props.videos;

    const [vidIndex, setVidIndex] = useState(0);

    useEffect(() => {
        props.fetchVideos();
    }, []);


    useEffect(() => {
        const videoSlideTimer = setInterval(() => {
            setVidIndex((prevIndex) =>
                prevIndex < videos.length - 1 ? prevIndex + 1 : 0);
        }, 10000);

        return () => {
            clearInterval(videoSlideTimer);
        };
    }, []);

    return (
        <BackgroundVideo source={videos[vidIndex]}>
            <HomeScreenContainer>
                <BigTitle h4 contrast bold uppercase centered>
                    adventure is worthwhile
                </BigTitle>
                <Text contrast bold title capitalize centered>
                    discover new places with us, adventure awaits
                </Text>
                <Button>
                    discover more
                </Button>
                <HomeSlideControl
                    selectedIndex={vidIndex}
                    onClick={(index) => setVidIndex(index)}
                    count={videos.length}
                />
            </HomeScreenContainer>
        </BackgroundVideo>
    )
}

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
    return {
        videos: state.video.videoList
    };
};

const mapDispatchToProps =
    (dispatch: Dispatch<AnyAction>, ownProps: OwnProps) => {
        return bindActionCreators({
            fetchVideos: fetchVideosAsync
        },
            dispatch
        );
    }

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
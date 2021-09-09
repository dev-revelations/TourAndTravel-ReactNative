import React, { useEffect } from 'react';
import { Heading } from '../../../components/Heading/Heading';
import { Screen } from '../../../components/Layouts/Screen';
import { GalleryImageList } from '../components/GalleryImageList';
import { connect } from 'react-redux';
import { RootState } from '../../../redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { fetchGalleryImagesAsync } from '../../../redux/gallery/galleryActions';

interface StateProps {
    images: GalleryImages;
}

interface DispatchProps {
    fetchGalleryImages: () => void;
}

type Props = StateProps & DispatchProps;

const GalleryScreen = (props: Props) => {

    useEffect(() => {
        props.fetchGalleryImages();
    }, []);

    const loaded = props.images && props.images.length > 0;

    return (
        <Screen>
            <Heading text={loaded ? "gallery" : "loading..."} />
            {
                loaded && <GalleryImageList images={props.images} />
            }
        </Screen>
    );
};

const mapStateToProps = (state: RootState): StateProps => {
    return {
        images: state.gallery.imageList
    };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => {
    return bindActionCreators({
        fetchGalleryImages: fetchGalleryImagesAsync
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen);
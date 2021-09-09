import React, { useEffect } from 'react';
import { Heading } from '../../../components/Heading/Heading';
import { Screen } from '../../../components/Layouts/Screen';
import { ServiceList } from '../components/ServiceList';
import { connect } from 'react-redux';
import { RootState } from '../../../redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { fetchServicesAsync } from '../../../redux/service/serviceActions';

interface StateProps {
    services: Service[];
}

interface DispatchProps {
    fetchServices: () => void;
}

type Props = StateProps & DispatchProps;

const ServicesScreen = (props: Props) => {

    useEffect(() => {
        props.fetchServices();
    }, []);

    const loaded = props.services && props.services.length > 0;

    return (
        <Screen>
            <Heading text={loaded ? "services" : "loading..."} />
            {
                loaded && <ServiceList services={props.services} />
            }
        </Screen>
    );
};

const mapStateToProps = (state: RootState): StateProps => {
    return {
        services: state.service.serviceList
    };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => {
    return bindActionCreators({
        fetchServices: fetchServicesAsync
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ServicesScreen);

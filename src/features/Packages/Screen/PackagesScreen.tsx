import React from 'react';
import { Heading } from "../../../components/Heading/Heading";
import { Screen } from "../../../components/Layouts/Screen";
import { PackageList } from '../components/PackageList';
import { connect } from 'react-redux';
import { RootState } from '../../../redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { fetchPackagesAsync } from '../../../redux/packages/packageActions';
import { useEffect } from 'react';

interface StateProps {
    packages: Package[];
};

interface DispatchProps {
    fetchPackages: () => void
}

type Props = StateProps & DispatchProps;

const PackagesScreen = (props: Props) => {

    useEffect(() => {
        props.fetchPackages();
    }, []);

    return (
        <Screen>
            {
                props.packages && props.packages.length > 0
                    ? [
                        <Heading text="packages" key={1} />,
                        <PackageList packages={props.packages} key={2} />
                    ]
                    : <Heading text="loading..." />
            }
        </Screen>
    );
}

const mapStateToProps = (state: RootState): StateProps => {
    return {
        packages: state.package.packageList
    };
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => {
    return bindActionCreators({
        fetchPackages: fetchPackagesAsync
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PackagesScreen);
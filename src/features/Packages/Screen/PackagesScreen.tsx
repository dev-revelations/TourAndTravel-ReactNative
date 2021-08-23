import React from 'react';
import { Heading } from "../../../components/Heading/Heading";
import { Screen } from "../../../components/Layouts/Screen";
import { PackageList } from '../components/PackageList';

export const PackagesScreen = () => {

    return (
        <Screen>
            <Heading text="packages" />
            <PackageList />
        </Screen>
    );
}
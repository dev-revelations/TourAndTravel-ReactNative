import React from 'react';
import { Col } from '../../../components/Layouts/Col';
import { Row } from '../../../components/Layouts/Row';
import { Text } from '../../../components/Text';
import { AboutUsBox } from '../components/AboutUsBox';
import { AboutUsContainer, HorizontalLine } from './AboutUsScreen.style';

const branchLocations = `
Iran

UK

Japan

US
`;

const social = `
Facebook

Instagram

Twitter

LinkedIn
`;

const aboutUs = `
Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Maxime Veniam Voluptatibus Quas Ipsa Saepe Ipsam Fugit Voluptatum Itaque Expedita Eaque. Facilis Totam Est Reprehenderit Accusamus Ratione Alias Quam Suscipit Maxime.
`;


export const AboutUsScreen = () => {
    const colBasis = 200;

    return (
        <AboutUsContainer>
            <Row>
                <Col basis={colBasis}>
                    <AboutUsBox title="about us">
                        <Text contrast>
                            {aboutUs}
                        </Text>
                    </AboutUsBox>
                </Col>
                <Col basis={colBasis}>
                    <AboutUsBox title="branch locations">
                        <Text contrast>
                            {branchLocations}
                        </Text>
                    </AboutUsBox>
                </Col>
                <Col basis={colBasis}>
                    <AboutUsBox title="quick links">
                        <Text contrast>
                            {social}
                        </Text>
                    </AboutUsBox>
                </Col>
            </Row>
            <HorizontalLine />
            <Text contrast centered capitalize bold>created by <Text bold accent>Behzad</Text></Text>
        </AboutUsContainer>
    );
}
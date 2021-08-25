import React from 'react';
import { Heading } from '../../../components/Heading/Heading';
import { Col } from '../../../components/Layouts/Col';
import { Row } from '../../../components/Layouts/Row';
import { Screen } from '../../../components/Layouts/Screen';
import { ContactForm } from '../components/ContactForm';
import { ContactImage } from './ContactScreen.style';

export const ContactScreen = () => {

    return (
        <Screen>
            <Heading text="contact" />
            <Row>
                <Col>
                    <ContactImage />
                </Col>
                <Col>
                    <ContactForm />
                </Col>
            </Row>
        </Screen>
    );
}
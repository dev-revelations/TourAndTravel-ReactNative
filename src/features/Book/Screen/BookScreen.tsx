import React from "react";
import { Heading } from "../../../components/Heading/Heading";
import { Col } from "../../../components/Layouts/Col";
import { Row } from "../../../components/Layouts/Row";
import { Screen } from "../../../components/Layouts/Screen";
import { BookForm } from "../components/BookForm";
import { BookImage } from "./BookScreen.style";


export const BookScreen = () => {

    return (
        <Screen>
            <Heading text="book now" />
            <Row>
                <Col>
                    <BookImage />
                </Col>
                <Col>
                    <BookForm />
                </Col>
            </Row>
        </Screen>
    );
}
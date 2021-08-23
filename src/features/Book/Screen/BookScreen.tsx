import React from "react";
import { Heading } from "../../../components/Heading/Heading";
import { Row } from "../../../components/Layouts/Row";
import { Screen } from "../../../components/Layouts/Screen";
import { BookForm } from "../components/BookForm";
import { BookImage } from "./BookScreen.style";


export const BookScreen = () => {

    return (
        <Screen>
            <Heading text="book now" />
            <Row>
                <BookImage />
                <BookForm />
            </Row>
        </Screen>
    );
}
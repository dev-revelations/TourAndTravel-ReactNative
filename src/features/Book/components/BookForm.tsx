import React from "react";
import { Button } from "../../../components/Button/Button";
import { Text } from "../../../components/Text";
import { BookFormContainer, BookTextInput, InputContainer } from "./BookForm.style";

export const BookForm = () => {

    return (
        <BookFormContainer>
            <InputContainer>
                <Text capitalize bold>where to</Text>
                <BookTextInput placeholder="place name"></BookTextInput>
            </InputContainer>
            <InputContainer>
                <Text capitalize bold>how many</Text>
                <BookTextInput placeholder="number of guests"
                    keyboardType="number-pad"></BookTextInput>
            </InputContainer>
            <InputContainer>
                <Text capitalize bold>arrivals</Text>
                <BookTextInput placeholder="dd/mm/yy"></BookTextInput>
            </InputContainer>
            <InputContainer>
                <Text capitalize bold>leaving</Text>
                <BookTextInput placeholder="dd/mm/yy"></BookTextInput>
            </InputContainer>
            <Button>book now</Button>
        </BookFormContainer>
    );
}
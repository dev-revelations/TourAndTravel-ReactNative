import React from 'react';
import { Button } from '../../../components/Button/Button';
import { InputContainer } from '../../../components/InputContainer/InputContainer';
import { Row } from '../../../components/Layouts/Row';
import { ContactFormContainer, ContactCol, ContactTextBox } from './ContactForm.style';


export const ContactForm = () => {
    const colBasis = 170;
    return (
        <ContactFormContainer>
            <Row>
                <ContactCol basis={colBasis}>
                    <InputContainer>
                        <ContactTextBox placeholder="name" />
                    </InputContainer>
                </ContactCol>
                <ContactCol basis={colBasis}>
                    <InputContainer>
                        <ContactTextBox placeholder="email" />
                    </InputContainer>
                </ContactCol>
            </Row>
            <Row>
                <ContactCol basis={colBasis}>
                    <InputContainer>
                        <ContactTextBox placeholder="number" />
                    </InputContainer>
                </ContactCol>
                <ContactCol basis={colBasis}>
                    <InputContainer>
                        <ContactTextBox placeholder="subject" />
                    </InputContainer>
                </ContactCol>
            </Row>
            <Row>
                <ContactCol basis={colBasis}>
                    <InputContainer>
                        <ContactTextBox
                            placeholder="message"
                            multiline
                            numberOfLines={4} />
                    </InputContainer>
                </ContactCol>
            </Row>
            <Row>
                <ContactCol basis={colBasis}>
                    <Button>send message</Button>
                </ContactCol>
                <ContactCol basis={colBasis} />
            </Row>
        </ContactFormContainer>
    );
}
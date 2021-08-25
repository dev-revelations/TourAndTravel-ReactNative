import styled from 'styled-components';
import { Card } from '../../../components/Card/Card';
import { Col } from '../../../components/Layouts/Col';
import { TextBox } from '../../../components/TextBox/TextBox';
import { getSpace, Spaces } from '../../../helpers/theme.helper';

export const ContactFormContainer = styled(Card)`
    padding: ${({theme}) => getSpace(theme, Spaces.s3)};
`;

export const ContactCol = styled(Col)`
    padding: ${({theme}) => `${getSpace(theme, Spaces.s0)} ${getSpace(theme, Spaces.s1)}`};
`;

export const ContactTextBox = styled(TextBox)`
    background-color: #f7f7f7;
`;
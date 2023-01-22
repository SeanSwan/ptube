import React from 'react';
import styled from 'styled-components';
import Contacts from './contacts.component';

const ContactPageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;
    padding: 20px;
`;

const ContactPage = () => {
    return (
        <ContactPageContainer>
            <Contacts />
        </ContactPageContainer>
    );
}

export default ContactPage;
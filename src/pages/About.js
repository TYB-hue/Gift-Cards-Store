import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 16px;
    color: #1e3a8a; /* Dark Blue */
    margin-button: 20px;
`;

const Section = styled.section`
    margin-bottom: 32px;
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
    color: #1e3a8a; /* Dark Blue */
`;

const Paragraph = styled.p`
    font-size: 14px;
    line-height: 1.6;
    color: #4b5563; /* Grayish text */
    margin-bottom: 16px;
`;

const About = () => {
    return (
        <AboutContainer>
            <Section>
                <Title>About Our Company</Title>
                <Paragraph>
                    Welcome to AGF, your trusted source for all things gift cards. 
                    We specialize in offering a wide variety of both digital and physical gift cards, 
                    perfect for any occasion. Whether you're looking to send a last-minute eGift or prefer 
                    a more traditional, tangible gift, we've got you covered.
                </Paragraph>
                <Paragraph>
                    Our mission is to make gifting easy and convenient for everyone. We pride ourselves 
                    on offering fast delivery, reliable service, and a customer experience that’s second to none. 
                    Thank you for choosing AGF as your gifting partner.
                </Paragraph>
            </Section>
            <Section>
                <Title>Our Values</Title>
                <Paragraph>
                    At AGF, we believe in the power of giving. We understand that a gift card 
                    is more than just a piece of plastic or an email—it’s an expression of appreciation, 
                    love, and gratitude. That’s why we are committed to providing high-quality products 
                    that meet the diverse needs of our customers.
                </Paragraph>
                <Paragraph className='lastPR'>
                    We stand by our values of integrity, customer satisfaction, and innovation. We constantly 
                    strive to improve our offerings and ensure that our customers always have the best 
                    gifting options available.
                </Paragraph >
            </Section>
        </AboutContainer>
    );
};

export default About;

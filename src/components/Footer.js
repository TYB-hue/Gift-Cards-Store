import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #1e3a8a; /* Dark Blue */
    color: white;
    padding: 16px 0;
   

`;

const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const FooterSection = styled.div`
    width: 100%;
    margin-bottom: 16px;
    @media(min-width: 768px) {
        width: 30%;
        margin-bottom: 0;
    }
`;

const Title = styled.h4`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
`;

const Text = styled.p`
    font-size: 12px;
    color: #cbd5e1; /* Light Gray */
`;

const LinkList = styled.ul`
    font-size: 12px;
    color: #cbd5e1;
    list-style: none;
    padding: 0;
`;

const LinkItem = styled.li`
    margin-bottom: 4px;
    &:hover {
        text-decoration: underline;
    }
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 16px;
`;

const SocialLink = styled.a`
    color: #cbd5e1;
    font-size: 12px;
    &:hover {
        color: white;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterSection>
                    <Title>Your Company</Title>
                    <Text>
                        1234 Street Name <br />
                        City, State, 56789
                    </Text>
                </FooterSection>
                <FooterSection>
                    <Title>Quick Links</Title>
                    <LinkList>
                        <LinkItem><a href="/">Home</a></LinkItem>
                        <LinkItem><a href="/about">About Us</a></LinkItem>
                        <LinkItem><a href="mailto:ahmed.pruo@gmail.com?subject=Inquiry from AFG Website">Contact</a></LinkItem>
                    </LinkList>
                </FooterSection>
                <FooterSection>
                    <Title>Follow Us</Title>
                    <SocialLinks>
                        <SocialLink href="#">Facebook</SocialLink>
                        <SocialLink href="#">Twitter</SocialLink>
                        <SocialLink href="#">Instagram</SocialLink>
                    </SocialLinks>
                </FooterSection>
            </FooterContent>
            <Text style={{ textAlign: 'center', marginTop: '16px' }}>
                &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
            </Text>
        </FooterContainer>
    );
};

export default Footer;

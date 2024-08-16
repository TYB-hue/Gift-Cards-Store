import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const SuccessPage = () => {
    const location = useLocation();
    const { transactionId, product } = location.state || {};

    return (
        <Container>
            <ConfirmationIcon>✔️</ConfirmationIcon>
            <Title>Payment Successful</Title>
            <TransactionInfo>
                <Text>Transaction Number: {transactionId || "123456789"}</Text>
                <Text>Amount Paid: ${product?.price || "0.00"}</Text>
                <Text>Paid by PayPal</Text>
            </TransactionInfo>
        </Container>
    );
};

export default SuccessPage;

// Styled components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    background-color: #f0f4f8;
`;

const ConfirmationIcon = styled.div`
    font-size: 64px;
    color: #4caf50;
    margin-bottom: 20px;
`;

const Title = styled.h1`
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
`;

const TransactionInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Text = styled.p`
    font-size: 18px;
    color: #555;
    margin: 5px 0;
`;

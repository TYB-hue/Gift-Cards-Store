import React from "react";
import { useParams } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Payment = () => {
    const { name } = useParams();

    const products = [
        { id: 1, name: "Apple Gift Card", price: 50, imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/giftcard-unselect-2020-family?wid=4000&hei=3836&fmt=jpeg&qlt=90&.v=1653339384459" },
        { id: 2, name: "Google Play", price: 50, imageUrl: "https://lh3.googleusercontent.com/bUIpmI0twaO8sqh_NExYTJF6QcBmPGzokqUChvS1xs7CUFB1lFs6WAl_L-8EWOfLJ4ig4zXFeRhOUrui723yltLFE3B7lK6j87ufVwicEZs9pYZcxmQ=w1060-l80-sg-rj-c0xffffff" },
        { id: 3, name: "Netflix", price: 50, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4YFFP9GGlOGI1e5Vp4w9xGM5YvgTUXd3yQ&s" },
        { id: 4, name: "Hulu" ,price: 50, imageUrl: "https://i5.walmartimages.com/seo/Hulu-50-Gift-Card-eGift-Card_86502c9d-ea1c-4698-8069-550108e48841_1.a89264f3d56308b523ac9c28541f9078.jpeg" },
        { id: 5, name: "Spotify", price: 50, imageUrl: "https://i5.walmartimages.ca/images/Enlarge/169/531/6000206169531.jpg" },
        { id: 6, name: "AMC", imageUrl: "https://productimages.nimbledeals.com/gift_card_skin/95d6efa3699532735e92f79cc293cb_1631746522086" },
        { id: 7, name: "Starbucks", price: 20, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_RThpTo8O3r8KonMzryGn4PrN5GQhmRYUw&s" },
        { id: 8, name: "DoorDash", price: 50, imageUrl: "https://target.scene7.com/is/image/Target/GUEST_347a9a5b-6bb4-4aad-9e99-cd85cf5c336e?wid=488&hei=488&fmt=pjpeg" },
        { id: 9, name: "Xbox", price: 100, imageUrl: "https://c1.neweggimages.com/productimage/nb640/32-011-197-01.png" },
        { id: 10, name: "PlayStation", price: 50, imageUrl: "https://ecokey.obs.ap-southeast-1.myhuaweicloud.com/image/2023/12/PlayStation-Gift-Card.png" },
        { id: 11, name: "Nintendo eShop", price: 25, imageUrl: "https://image.smythstoys.com/original/desktop/604566.jpg" },
        { id: 12, name: "Steam", price: 50, imageUrl: "https://www.pcgamesupply.com/media/assets/images/MobileGroupImages/steam.png" },
   
    ];
    const navigate = useNavigate
    const product = products.find(product => product.name === name);

    return (
        <><Container>
            <ProductSection>
                <ProductImage src={product?.imageUrl} alt={product?.name} />
                <ProductDetails>
                    <ProductName>{product?.name}</ProductName>
                    <ProductPrice>${product?.price}</ProductPrice>
                </ProductDetails>
            </ProductSection>

            {/* <PaymentOptions> */}
            <PayPalScriptProvider options={{ "client-id": "AazKN0HbPi7WzceMyIuSFJJ74TcnKvMBq22lAHsfjyLeokNryu1sPMZO-uJsZKnrfxx9V3FeAVEwrsEM" }}>
            <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: product?.price.toString(), // Set this to your product's price
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        navigate('/success', {
                            state: { 
                                transactionId: details.id, 
                                product: product  // Pass the product object
                            }
                        });
                    });
                }} 
            />
        </PayPalScriptProvider>
            {/* </PaymentOptions> */}

            <Footer>مادعوم من PayPal</Footer>
        </Container>
        <div className="gap"></div></>
    );
};

export default Payment;

// Styled components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const ProductSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductImage = styled.img`
    width: 150px;
    height: auto;
    margin-right: 20px;
`;

const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ProductName = styled.h1`
    font-size: 24px;
    margin: 0;
`;

const ProductPrice = styled.p`
    font-size: 20px;
    color: gray;
`;

const PaymentOptions = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    gap: 10px;
`;

const Footer = styled.div`
    margin-top: 20px;
    font-size: 14px;
    color: gray;
    text-align: center;
`;

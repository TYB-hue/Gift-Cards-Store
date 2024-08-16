import React from "react";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom'


const Container = styled.div`
    padding: 20px;
    background-color: #f7f7f7;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
`;

const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);  // Make the card bigger on hover
        box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);  // Increase shadow on hover
    }
`;

const ProductImage = styled.img`
    width: 100px;
    height: auto;
    margin-bottom: 10px;
`;

const ProductName = styled.div`
    font-size: 14px;
    color: #333;
    text-align: center;
    margin-top: 10px;
`;




















const ProductList = () => {
    const navigate = useNavigate()
    const products = [
        { id: 1, name: "Apple Gift Card", imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/giftcard-unselect-2020-family?wid=4000&hei=3836&fmt=jpeg&qlt=90&.v=1653339384459" },
        { id: 2, name: "Google Play", imageUrl: "https://lh3.googleusercontent.com/bUIpmI0twaO8sqh_NExYTJF6QcBmPGzokqUChvS1xs7CUFB1lFs6WAl_L-8EWOfLJ4ig4zXFeRhOUrui723yltLFE3B7lK6j87ufVwicEZs9pYZcxmQ=w1060-l80-sg-rj-c0xffffff" },
        { id: 3, name: "Netflix", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4YFFP9GGlOGI1e5Vp4w9xGM5YvgTUXd3yQ&s" },
        { id: 4, name: "Hulu", imageUrl: "https://i5.walmartimages.com/seo/Hulu-50-Gift-Card-eGift-Card_86502c9d-ea1c-4698-8069-550108e48841_1.a89264f3d56308b523ac9c28541f9078.jpeg" },
        { id: 5, name: "Spotify", imageUrl: "https://i5.walmartimages.ca/images/Enlarge/169/531/6000206169531.jpg" },
        { id: 6, name: "AMC", imageUrl: "https://productimages.nimbledeals.com/gift_card_skin/95d6efa3699532735e92f79cc293cb_1631746522086" },
        { id: 7, name: "Starbucks", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_RThpTo8O3r8KonMzryGn4PrN5GQhmRYUw&s" },
        { id: 8, name: "DoorDash", imageUrl: "https://target.scene7.com/is/image/Target/GUEST_347a9a5b-6bb4-4aad-9e99-cd85cf5c336e?wid=488&hei=488&fmt=pjpeg" },
        { id: 9, name: "Xbox", imageUrl: "https://c1.neweggimages.com/productimage/nb640/32-011-197-01.png" },
        { id: 10, name: "PlayStation", imageUrl: "https://ecokey.obs.ap-southeast-1.myhuaweicloud.com/image/2023/12/PlayStation-Gift-Card.png" },
        { id: 11, name: "Nintendo eShop", imageUrl: "https://image.smythstoys.com/original/desktop/604566.jpg" },
        { id: 12, name: "Steam", imageUrl: "https://www.pcgamesupply.com/media/assets/images/MobileGroupImages/steam.png" },
    ];
const handleClick = (product) =>{
    navigate(`/PaymentPage/payment/${product.name}`)
}
    return (
        <><Container>
            <Grid>
                {products.map((product) => (
                    <ProductCard key={product.id}
                    onClick={()=>handleClick(product)} >
                        <ProductImage src={product.imageUrl} alt={product.name} className="imgsz" />
                        <ProductName>{product.name}</ProductName>
                       
                    </ProductCard>
                ))}
            </Grid>
        </Container><div className="gap">
            </div></>
    );
};

export default ProductList;


import React from 'react';
import styled,{keyframes} from 'styled-components';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
// import GiftCard from '../public/gift-card-6967322-5690089.png';


const HomeContainer = styled.div`
  text-align: left;
`;


const moveUpDown = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

// Styled components
const GiftCardImage = styled.img`
  width: 550px; /* Adjust the size as needed */
  animation: ${moveUpDown} 3s ease-in-out infinite;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Content = styled.div`
  margin-bottom: 20px;
`;


const HeroSection = styled.div`
  background: rgb(252,255,158);
  background: linear-gradient(171deg, rgba(252,255,158,1) 0%, rgba(251,251,235,1) 53%, rgba(255,255,255,1) 100%);
  padding: 50px 20px;
  color: #003087;
  height: 570px;

  @media (max-width: 768px) {
    height: auto;
    padding: 30px 15px;
  }

  h1 {
    font-size: 2.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;

    @media (max-width: 768px) {
      padding: 8px 16px;
      font-size: 0.9rem;
    }
  }
`;

const ServicesSection = styled.section`
  padding: 40px 20px;
  background-color: #003087;
  color: white;
  text-align: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 20px;
    }
  }

  .wholContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .sec2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .secendH {
    width: 50%;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 20px;
    }
  }

  .apple {
    max-width: 100%;
    height: auto;
  }

  .lastBTN {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: yellow;
    border: none;
    cursor: pointer;
    font-size: 1rem;

    @media (max-width: 768px) {
      padding: 8px 16px;
      font-size: 0.9rem;
    }
  }
`;


const Home = () => {
  return (
    <>

      <HomeContainer>
        <div className='spliter'>

       <div className='halfOne'>
        <HeroSection className='Hero'>
          <h1 className='welcome'>Welcome to GiftCardStore</h1>
          <p className='yourOne'>Discover the perfect gift for every occasion with our 
            wide range of customizable eGift cards. Convenient, instant, and tailored to make every moment special.</p>
        <a href='/productList'> <button className='Start-Shopping'>Start Shopping</button></a> 
        </HeroSection>
        </div>
        <div className='halfTow'>
        <GiftCardImage src="/gift-card-6967322-5690089.png" alt="Gift Card" />
        </div>
        </div>
      </HomeContainer>
      {/* C:\Users\ahmed\reacEcW\ecommerce\public\gift-card-6967322-5690089.png */}

     
      <section className="services">
        {/* the rest of the style will be found in index.css in .ours */}
               <h1 className='ours text-center   font-bold'>Our Services</h1>
        {/* the rest of the style will be found in index.css in .ours*/}
              <div className='wholContainer'>
                <div className='sec2   '>
                  {/* the rest of the style will be found in index.css in .sec2*/}
                <div className="flex flex-col">
                    <ServiceCard 
                    className="flex flex-col "
                        
                        Title="Instant Digital eGift Cards" 
                        Des="Send thoughtful gifts instantly with our eGift cards, delivered directly to your loved ones via SMS or email, perfect for any occasion." 
                    />
                    <ServiceCard 
                       
                        Title="Personalized Physical Gift Cards" 
                       Des="Give a tangible and personalized touch with our physical gift cards, beautifully packaged and delivered straight to your recipient's door." 
                    />
                   <a href='/productList'>
                       <button className='lastBTN'>Start Now</button>
                    </a>
                    </div>
                   </div>
                        <div className='secendH'>
                         <GiftCardImage className='apple' src="https://i.pinimg.com/originals/51/b6/68/51b66889697d204fae26c910ed1ce78e.png"/>
                         
                        </div>

                   </div>
                   {/* for test */}
                   {/* <TestButton /> */}

             </section>
             
    </>
  );
};

export default Home;

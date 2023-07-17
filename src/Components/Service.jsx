import React from 'react';
import styled from 'styled-components';
import img3 from '../images/js1-removebg-preview.png'
import MiniCard from './MiniCard';
const Container = styled.div`
display: flex;  
`;
const Left = styled.div`
width: 50%;
`;

const Image = styled.img`
height: 100%;
margin-left: 100px;
`;

const Right = styled.div`
width: 50%;  
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1``;

const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

const CardContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 20px;
`

const Service = () => {
  return (
    <Container>
        <Left>
            <Image src={img3} alt=""></Image>
        </Left>
        <Right>
          <Wrapper>
            <Title>Simple process to start</Title>
            <Desc>
            We provide digital experience services to startups and small
            businesses to looking for a partner of their digital media, design &
            development, lead generation and communications requirents. We work
            with you, not for you. Although we have a great resources
            </Desc>
            <CardContainer>
              <MiniCard/>
              <MiniCard/>
              <MiniCard/>
            </CardContainer>

          </Wrapper>
        </Right>
    </Container>
    
  )
}

export default Service
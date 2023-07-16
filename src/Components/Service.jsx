import React from 'react';
import styled from 'styled-components';
import img3 from '../images/js1-removebg-preview.png'
const Container = styled.div`
display: flex;  
`;
const Left = styled.div`
width: 50%;
`;
const Right = styled.div`
display: flex;  
`;

const Image = styled.img`
height: 100%;
margin-left: 100px;
`;

const Service = () => {
  return (
    <Container>
        <Left>
            <Image src={img3} alt=""></Image>
        </Left>
        <Right></Right>
    </Container>
    
  )
}

export default Service
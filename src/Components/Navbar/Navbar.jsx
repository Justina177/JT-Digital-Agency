import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 50px;
`
const Wrapper = styled.div`
    padding: 10px 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Menu = styled.ul`
display: flex;
list-style: none;
`;

const MenuItem = styled.div`
margin-right: 30px;
font-size: 20px;
font-weight: bold;
color: gray;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson; 
`

const Button = styled.button`
border: 2px solid black;
padding: 10px 15px;
background-color: crimson;
color: white;
font-weight: bold;
border-radius: 10px;
cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
              <h1><Logo>Agency</Logo></h1>
              <Menu>
                <MenuItem>Home</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Services</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>Contact</MenuItem>
              </Menu>
            </Left>
            <Button>JOIN TODAY</Button>
        </Wrapper>
    </Container>
  )
}

export default Navbar
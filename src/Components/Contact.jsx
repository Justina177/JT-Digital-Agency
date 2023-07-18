import React from 'react';
import styled from 'styled-components';
import Map from "../images/map.png";
import Phone from "../images/mapPhone-removebg-preview.png";
import Send from "../images/send.png";

const Container = styled.div`
  height: 90%;
  background: url("../images/pexels-david-mcbee-730564.jpg")
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormConatainer = styled.div`
  width: 50%
`;

const Title = styled.h1`
  margin: 50px;
  margin-top: 0;
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justy-content: center;
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
`;


const AddressContainer = styled.div`
  width: 50%
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
`;

const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
`;


const Contact = () => {
  return (
    <Container>
        <Wrapper>
          <FormConatainer>
          <Title>
            Questions? <br /> Let's Get In Touch
          </Title>
            <Form>
              <LeftForm>
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" />
                <Input placeholder="Subject" />
              </LeftForm>
              <RightForm>
                <TextArea placeholder="Your Message" />
                <Button>Send</Button>
              </RightForm>
            </Form>
          </FormConatainer>
          <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>23 Malfazi Plaza, Karu-Roundabout, FCT-Abuja, Nigeria</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+2 348 1222 2062</Text>
            <Text>+2 348 1234 5678</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>contact@jtmedia.dev</Text>
            <Text>sales@jtmedia.dev</Text>
          </AddressItem>
          </AddressContainer>
        </Wrapper>
    </Container>
  )
}

export default Contact
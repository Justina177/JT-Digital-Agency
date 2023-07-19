// import './App.css';
import styled, { css } from 'styled-components';
import Contact from './Components/Contact';
import Featured from './Components/Featured';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar/Navbar';
import Price from './Components/Price';
import Service from './Components/Service';

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

const IntoShape = styled.div`
  ${Shape};
  clip-path: polygon(64% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`

const FeaturedShape = styled.div`
  ${Shape};
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0% 100%);
  background-color :pink ;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0, 33% 100%, 0 100%);
  background-color: #f88497;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`;


function App() {
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container> 

      <Container>
        <Featured />
        <FeaturedShape />
      </Container>

      <Container>
        <Service />
        {!smallScreen && <ServiceShape />}
      </Container>

      <Container>
        <Price/>
        <PriceShape/>
      </Container>

      <Container>
        <Contact/>
        <Footer/>
      </Container>
    </>
  );
}

export default App;

// 1:31:08

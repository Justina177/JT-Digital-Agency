// import './App.css';
import styled, { css } from 'styled-components';
import Featured from './Components/Featured';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar/Navbar';

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
  background-color: pink;
`

function App() {
  return (
    <div className="container">
      <Container>
      <Navbar />
      <Intro />
      <IntoShape />
      </Container> 
      <Container>
      <Featured />
      <FeaturedShape />
      </Container>
      
    
      
    </div>
  );
}

export default App;

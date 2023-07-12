// import './App.css';
import styled from 'styled-components';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar/Navbar';

const Container = styled.div`
height: 60vh;
`

function App() {
  return (
    <div className="container">
      <Container>
      <Navbar />
      <Intro />
      </Container> 
      
    
      
    </div>
  );
}

export default App;

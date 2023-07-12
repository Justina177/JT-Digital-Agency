// import './App.css';
import styled from 'styled-components';
import Navbar from './Components/Navbar/Navbar';

const Container = styled.div`
height: 60vh;
background-color: blue;
`

function App() {
  return (
    <div className="container">
      <Container>
      <Navbar />
      </Container> 
      
    
      
    </div>
  );
}

export default App;

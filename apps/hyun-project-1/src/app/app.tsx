import styled from 'styled-components';
// import NxWelcome from './nx-welcome';
import Header from '../components/header/header';
import SearchBar from '../components/search-bar/search-bar';
import BodyTabs from '../components/body-tabs/body-tabs';
import Footer from '../components/footer/footer';
import './global.css';

const StyledApp = styled.div`
  color: #393a4b;
  font-family: Arial, Helvetica, sans-serif;
`;

const StyledBodyContainer = styled.div`
  width: 70%;
  min-width: 480px;
  margin: auto;
`;

export function App() {
  return (
    <StyledApp>
      <Header />
      <StyledBodyContainer>
        <SearchBar />
        <BodyTabs />
      </StyledBodyContainer>
      {/* <NxWelcome title="hyun-project-1" /> */}
      <Footer />
    </StyledApp>
  );
}

export default App;

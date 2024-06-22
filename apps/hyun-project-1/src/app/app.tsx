import styled from 'styled-components';
// import NxWelcome from './nx-welcome';
import Header from '../components/header/header';
import SearchBar from '../components/search-bar/search-bar';
import BodyTabs from '../components/body-tabs/body-tabs';

const StyledApp = styled.div`
  color: #393a4b;
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
    </StyledApp>
  );
}

export default App;

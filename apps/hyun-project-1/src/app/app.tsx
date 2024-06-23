import styled from 'styled-components';
// import NxWelcome from './nx-welcome';
import Header from '../components/header/header';
import SearchBar from '../components/search-bar/search-bar';
import BodyTabs from '../components/body-tabs/body-tabs';
import Footer from '../components/footer/footer';
import './global.css';
import SignupPage from '../pages/signup-page/signup-page';
import { useState } from 'react';
import { AppFlow } from '../enums';
import LoginPage from '../pages/login-page/login-page';

const StyledApp = styled.div`
  color: #393a4b;
  font-family: Arial, Helvetica, sans-serif;
`;

const StyledBodyContainer = styled.div`
  width: 70%;
  min-width: 480px;
  margin: auto;
`;

const LoginContainer = styled.div`
  border: 1px solid #e8e8e8;
  padding-block: 20px;
`;

const SignupContainer = styled.div`
  border: 1px solid #e8e8e8;
  padding-block: 20px;
`;

export function App() {
  const [appFlow, setAppFlow] = useState(AppFlow.CONTENT);
  const updateAppFlow = (stage: AppFlow) => {
    setAppFlow(stage);
  };
  return (
    <StyledApp>
      <Header setAppFlow={updateAppFlow} />
      <StyledBodyContainer>
        <SearchBar setAppFlow={updateAppFlow} />
        {appFlow === AppFlow.CONTENT && <BodyTabs />}
        {appFlow === AppFlow.LOGIN && (
          <LoginContainer>
            <LoginPage />
          </LoginContainer>
        )}
        {appFlow === AppFlow.SIGNUP && (
          <SignupContainer>
            <SignupPage />
          </SignupContainer>
        )}
      </StyledBodyContainer>
      {/* <NxWelcome title="hyun-project-1" /> */}
      <Footer />
    </StyledApp>
  );
}

export default App;

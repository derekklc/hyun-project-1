import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 480px;
  margin-inline: auto;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CellContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledTextInput = styled.input`
  border: 1px lightgrey solid;
  border-radius: 4px;
  min-height: 30px;
  padding: 0 10px;
`;

const StyledTitle = styled.h1`
  font-weight: semibold;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 0;
  text-align: center;
`;

const SubmitButton = styled.button`
  background: #8282ec;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: 10px 0;
`;

const LoginPrompt = styled.div`
  display: flex;
  gap: 2px;
  * {
    font-size: 12px;
    line-height: 1;
    padding: 0;
  }
`;

const LoginButton = styled.button`
  color: blue;
  background: none;
  border: none;
  cursor: pointer;
`;

export function SignupPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <Container>
      <StyledTitle>Sign Up</StyledTitle>
      <StyledForm>
        <CellContainer>
          <label htmlFor="email">Email</label>
          <StyledTextInput
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </CellContainer>
        <CellContainer>
          <label htmlFor="password">Password</label>
          <StyledTextInput
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </CellContainer>
        <CellContainer>
          <label htmlFor="password">Confirm Password</label>
          <StyledTextInput
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </CellContainer>
        <SubmitButton type="submit">Sign Up</SubmitButton>
        <LoginPrompt>
          <span>Already has an account?</span>
          <LoginButton>Log in.</LoginButton>
        </LoginPrompt>
      </StyledForm>
    </Container>
  );
}

export default SignupPage;

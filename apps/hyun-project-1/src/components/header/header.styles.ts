import styled from 'styled-components';

export const StyledHeader = styled.div`
  border-bottom: 1px solid whitesmoke;
`;

export const InnerContainer = styled.div`
  width: 70%;
  min-width: 480px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 7px;
  margin: auto;
`;

export const RightSide = styled.div`
  display: flex;
  gap: 7px;
`;

export const StyledButton = styled.button`
  padding: 2px 4px;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.5s;
  &:hover {
    background: #e8e8e8;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  background: #e9e9e9;
  padding-bottom: 50px;
`;
export const InnerContainer = styled.div`
  width: 70%;
  min-width: 480px;
  margin-inline: auto;
  margin-top: 10px;
  padding-top: 10px;
  display: flex;
  gap: 20px;
`;

export const ColumnContainer = styled.div<{ isFirst?: boolean }>`
  flex: ${({ isFirst }) => (isFirst ? '2' : '1')};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ColumnTitle = styled.h1`
  margin: 0;
  font-size: 14px;
  font-weight: normal;
`;

export const AboutText = styled.p`
  margin: 0;
  font-size: 12px;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 2px;
`;

export const IconBox = styled.div`
  height: 40px;
  width: 40px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledButton = styled.button`
  padding: 0;
  font-size: 12px;
  background: none;
  border: none;
  cursor: pointer;
  width: fit-content;
  color: grey;
`;

export const CopyrightText = styled.p`
  margin: 0;
  font-size: 12px;
  color: grey;
  width: 70%;
  min-width: 480px;
  margin-inline: auto;
  margin-top: 10px;
`;

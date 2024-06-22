import { ReactElement } from 'react';
import * as S from './footer.styles';

const renderIcons = () => {
  const iconsList = ['fb-icon.png', 'x-icon.jpg', 'instagram-icon.jpg'];
  return iconsList.map((item) => {
    let iconPath;
    try {
      iconPath = require(`../../images/${item}`);
    } catch {
      return <></>;
    }
    return (
      <S.IconBox>
        {iconPath && <img height={40} width={40} src={iconPath} />}
      </S.IconBox>
    );
  });
};

export function Footer() {
  return (
    <S.Container>
      <S.InnerContainer>
        <S.ColumnContainer isFirst>
          <S.ColumnTitle>About RH - Right Here</S.ColumnTitle>
          <S.AboutText>
            Looking for friends, events, and service providers? You can find
            useful information on Right Here. We aim to present you with the
            most relevant and helpful info and groups, and help you solve
            problems and meet new friends. RH currently provides services in
            Australia and Korea.
          </S.AboutText>
          <S.IconsContainer>{renderIcons()}</S.IconsContainer>
        </S.ColumnContainer>
        <S.ColumnContainer>
          <S.ColumnTitle>Information</S.ColumnTitle>
          <S.ButtonsContainer>
            <S.StyledButton>About us</S.StyledButton>
            <S.StyledButton>Terms of use</S.StyledButton>
            <S.StyledButton>Advertisement</S.StyledButton>
          </S.ButtonsContainer>
        </S.ColumnContainer>
        <S.ColumnContainer>
          <S.ColumnTitle>Contacts</S.ColumnTitle>
          <div>
            <S.AboutText>Address: Melbourne</S.AboutText>
            <S.AboutText>Phone: +61430571111</S.AboutText>
            <S.AboutText>Email: info@righthere.com.au</S.AboutText>
          </div>
        </S.ColumnContainer>
      </S.InnerContainer>
      <S.CopyrightText>© All Rights Reserved.</S.CopyrightText>
    </S.Container>
  );
}

export default Footer;

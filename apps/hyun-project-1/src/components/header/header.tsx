import * as S from './header.styles';

export function Header() {
  return (
    <S.StyledHeader>
      <S.InnerContainer>
        <div>RH - one stop life services</div>
        <S.RightSide>
          <S.StyledButton>Sign in</S.StyledButton>
          <S.StyledButton>Sign up</S.StyledButton>
          <S.StyledButton>Language</S.StyledButton>
        </S.RightSide>
      </S.InnerContainer>
    </S.StyledHeader>
  );
}

export default Header;

import { AppFlow } from '../../enums';
import * as S from './header.styles';

interface IHeader {
  setAppFlow: (stage: AppFlow) => void;
}

export const Header: React.FC<IHeader> = (headerProps) => {
  const { setAppFlow } = headerProps;
  return (
    <S.StyledHeader>
      <S.InnerContainer>
        <div>RH - one stop life services</div>
        <S.RightSide>
          <S.StyledButton onClick={() => setAppFlow(AppFlow.LOGIN)}>
            Sign in
          </S.StyledButton>
          <S.StyledButton onClick={() => setAppFlow(AppFlow.SIGNUP)}>
            Sign up
          </S.StyledButton>
          <S.StyledButton>Language</S.StyledButton>
        </S.RightSide>
      </S.InnerContainer>
    </S.StyledHeader>
  );
};

export default Header;

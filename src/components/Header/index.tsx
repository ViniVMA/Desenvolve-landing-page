import { GbTechLogo } from "components/GbTechLogo";
import * as S from "./header.style";

export const Header = () => {
  return (
    <S.Header>
      <S.HeaderContent>
        <S.LogoWrapper>
          <GbTechLogo fill="#fff" />
        </S.LogoWrapper>
      </S.HeaderContent>
    </S.Header>
  );
};

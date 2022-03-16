import { GbTechLogo } from "components/GbTechLogo";
import { useEffect, useRef, useState } from "react";
import * as S from "./header.style";

export const Header = () => {
  const [color, setColor] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setColor(window.pageYOffset > 200),
      );
    }
  }, []);

  return (
    <S.Wrapper>
      <S.Header className={color ? "scroll" : ""}>
        <S.HeaderContent>
          <S.LogoWrapper>
            <GbTechLogo fill="#000" />
          </S.LogoWrapper>
        </S.HeaderContent>
      </S.Header>
    </S.Wrapper>
  );
};

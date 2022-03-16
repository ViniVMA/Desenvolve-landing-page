import * as S from "./button.style";

interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return <S.Button>{text}</S.Button>;
};

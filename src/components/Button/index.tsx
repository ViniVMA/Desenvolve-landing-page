import * as S from "./button.style";

interface ButtonProps {
  text: string;

  white?: boolean;
}

export const Button = ({ text, white }: ButtonProps) => {
  return <S.Button white={white}>{text}</S.Button>;
};

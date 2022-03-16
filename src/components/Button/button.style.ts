import styled from "styled-components/macro";

interface ButtonProps {
  white?: boolean;
}

export const Button = styled.button<ButtonProps>`
  min-width: 157px;
  max-height: 54px;
  background: ${(props) =>
    props.white
      ? "#fff"
      : "linear-gradient(178.18deg, #499d71 -13.56%, #a9cb7a 158.3%)"};
  border-radius: 100px;
  color: ${(props) => (props.white ? "#000" : "#fff")};
  font-weight: bold;
  padding: 20px 20px;

  :hover {
    background: ${(props) =>
      props.white
        ? "#fff"
        : "linear-gradient(178.18deg, #a9cb7a -13.56%, #499d71 158.3%)"};
    border: ${(props) => (props.white ? " 1px solid #000" : "none")};
    cursor: pointer;
  }
`;

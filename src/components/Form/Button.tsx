import styled from "styled-components";

type ButtonProps = {
  isReverse?: boolean;
};

const Button = styled.button<ButtonProps>`
  display: block;
  padding: 12px 48px;
  background: ${({ isReverse }) => (isReverse ? "transparent" : "#333")};
  border-radius: 10px;
  color: ${({ isReverse }) => (isReverse ? "#333" : "#fff")};
  font-weight: 700;
  margin: 0 auto;
`;
Button.displayName = "Button";

export default Button;

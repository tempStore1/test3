import styled from "styled-components";

const Button = styled("button").attrs((props) => {
  type: props.type;
})<{ isReverse?: boolean }>`
  display: block;
  padding: 12px 48px;
  background: ${(props) => (props.isReverse ? "transparent" : "#333")};
  border-radius: 10px;
  color: ${(props) => (props.isReverse ? "#333" : "#fff")};
  font-weight: 700;
  margin: 0 auto;
`;

export default Button;

import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.background || "black"};
  width: 15rem;
  height: 8rem;
  border-radius: 6px;
  font-size: 3rem;
  text-align: center;
  font-weight: bolder;
`;

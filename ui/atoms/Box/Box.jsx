import styled from "styled-components";

export const Box = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  align-items: ${(props) => props.align ? props.align : "start"};
  justify: ${(props) => props.justify ? props.justify : "start"};
`;

import styled from "styled-components";

export const StyledBox = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  align-items: ${(props) => (props.align ? props.align : "start")};
  justify: ${(props) => (props.justify ? props.justify : "start")};
  ${(props) => console.log(123, props)}
`;

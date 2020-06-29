import React from "react";
import styled from "styled-components";
import { ProgressBarProps } from "./index";
import { device } from "../../utills/variables"

const ProgressBarLayout = styled.div`
  position: relative;
  height: 3px;
  width: 100%;
  background: ${(props) => props.theme.colors.brand};

  @media ${device.laptop} {
    display: none; 
  }
`;

const Filler = styled.div<ProgressBarProps>`
  position: absolute;
  height: 100%;
  width: calc(${(props) => props.scrollBarPercent}%);
  max-width: calc(100% - 49px);
  background: ${(props) => props.theme.colors.gray_light};
`;

const FillerRight = styled(Filler)<ProgressBarProps>`
  left: calc(49px + ${(props) => props.scrollBarPercent}%);
  width: 100%;
`;

export const ProgressBar = ({ scrollBarPercent }: ProgressBarProps) => (
  <ProgressBarLayout>
    <Filler scrollBarPercent={scrollBarPercent} />
    <FillerRight scrollBarPercent={scrollBarPercent} />
  </ProgressBarLayout>
);

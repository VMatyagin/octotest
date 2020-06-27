interface BoxProps {
    direction?: column | row
    align?: AlignContentType
    justify?: JustifyContentType
    background?: BackgroundType;
    gap?: GapType
  }
  
declare const Box: React.FC<BoxProps>

export { Box }
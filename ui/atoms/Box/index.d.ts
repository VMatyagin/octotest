interface BoxProps {
    direction?: column | row
    align?: AlignContentType
    justify?: JustifyContentType
    background?: BackgroundType;
  }
  
declare const Box: React.FC<BoxProps>

export { Box }
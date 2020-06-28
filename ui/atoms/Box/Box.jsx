import { StyledBox } from "./StyledBox";
import { Children } from "react";
import { Gap } from "../Gap";

export const Box = React.forwardRef(({ children, gap, ...rest }, ref) => {
  let content = children;
  if (gap && gap !== "none") {
    content = [];
    let firstIndex;
    Children.forEach(children, (child, index) => {
      if (child) {
        if (firstIndex === undefined) {
          firstIndex = index;
        } else {
          content.push(<Gap key={`gap-${index}`} gap={gap} />);
        }
      }
      content.push(child);
    });
  }

  return <StyledBox ref={ref} {...rest}>{content}</StyledBox>;
});

Box.displayName = "Box";

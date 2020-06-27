import { StyledBox } from "./StyledBox"
import { Children } from 'react'
import { Gap } from '../Gap'

export const Box = ({children, gap, ...rest}) => {
  let content = children
  if (gap && gap !== 'none') {
    content = []
    let firstIndex
    Children.forEach(children, (child, index) => {
      if (child) {
        if (firstIndex === undefined) {
          firstIndex = index
        } else {
          content.push(
            <Gap
              key={`gap-${index}`}
              gap={gap}
            />
          )
        }
      }
      content.push(child)
    })
  }
  console.log(content);
  

  return (
    <StyledBox {...rest}>
      {content}
    </StyledBox>)
}

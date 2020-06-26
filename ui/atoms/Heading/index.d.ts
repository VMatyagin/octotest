interface HeadingProps {
    level: levelType
  }
  
type levelType = 1 | 2 | 3 | 4 | "1" | "2" | "3" | "4"

declare const Heading: React.FC<HeadingProps>

export { Heading }
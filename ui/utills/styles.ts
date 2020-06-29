import { css, createGlobalStyle } from "styled-components";
import { device } from "./variables";

const headingTheme = [
  {
    mobile: {
      font: {
        weight: "bold",
        size: "32px",
      },
      lineHeight: "120%",
    },
    laptop: {
      font: {
        weight: "800",
        size: "54px",
      },
      lineHeight: "120%",
    },
  },
  {
    mobile: {
      font: {
        weight: "bold",
        size: "30px",
      },
      lineHeight: "120%",
    },
    laptop: {
      font: {
        weight: "bold",
        size: "48px",
      },
      lineHeight: "120%",
    },
  },
  {
    mobile: {
      font: {
        weight: "bold",
        size: "26px",
      },
      lineHeight: "120%",
    },
    laptop: {
      font: {
        weight: "bold",
        size: "40px",
      },
      lineHeight: "120%",
    },
  },
  {
    mobile: {
      font: {
        weight: "bold",
        size: "20px",
      },
      lineHeight: "120%",
    },
    laptop: {
      font: {
        weight: "bold",
        size: "30px",
      },
      lineHeight: "140%",
    },
  },
];

const fontTheme = {
  small: {
    size: "16px",
    family: "Montserrat",
    weight: "normal",
    style: "normal",
    letterSpacing: "0.15em",
  },
  medium: {
    size: "18px",
    family: "Montserrat",
    weight: "normal",
    style: "normal",
  },
  large: {
    size: "20px",
    family: "Montserrat",
    weight: "normal",
    style: "normal",
    letterSpacing: "0.2em",
  },
  link: {
    size: "18px",
    family: "Montserrat",
    weight: "bold",
    style: "normal",
  },
  img_fill: {
    size: "20px",
    family: "Montserrat",
    weight: "bold",
    style: "normal",
  },
};

const lineTheme = {
  small: {
    height: "150%",
  },
  medium: {
    height: "160%",
  },
  large: {
    height: "160%",
  },
  uppercase: {
    height: "140%",
  },
  link: {
    height: "160%",
  },
  img_fill: {
    height: "160%",
  }
};

const buttonTheme = {
  border: {
    radius: "8px",
    width: "2px",
  },
  size: {
    medium: {
      width: "126px",
      height: "50px",
    },
    large: {
      width: "167px",
      height: "60px",
    },
  },
};

const gapTheme = {
  small: "6px",
  medium: "22px",
  large: "41px",
  desktop: {
    small: "15px",
    medium: "20px",
    large: "60px",
  },
};

const paddingTheme = {
  small: "10px",
  medium: "20px",
  large: "42px",
};

const logoSizes = {
  mobile: {
    width: "218px",
    height: "30px",
  },
  desktop: {
    width: "170px",
    height: "24px",
  },
  margin: {
    top: "26px",
    bottom: "30px",
  },
};

const imgTheme = {
  border: {
    radius: "8px",
  },
  size: {
    medium: {
      width: "126px",
      height: "50px",
    },
    large: {
      width: "167px",
      height: "60px",
    },
  },
};

const inputTheme = {
  border: {
    radius: "5px",
  },
  size: {
    mobile: {
      width: "100%",
      height: "50px",
    },
    desktop: {
      width: "538px",
      height: "50px",
    },
  },
};

export const BasicTheme = {
  font: fontTheme,
  line: lineTheme,
  colors: {
    default: "#333333",
    brand: "#00A4F7",
    hover: "#128ACE",
    white: "#FFFFFF",
    background: "#FFFFFF",
    gray_dark: "#ADADAD",
    gray_light: "#DADADA",
    clipboard: "#FFF2C3",
    error: "#EA4F24",
    basic_dark: "#128ACE",
    img_fill: "rgba(51, 51, 51, 0.5)"
  },

  heading: headingTheme,
  button: buttonTheme,
  gap: gapTheme,
  padding: paddingTheme,
  logo: logoSizes,
  img: imgTheme,
  input: inputTheme,
};

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Montserrat', sans-serif;
  src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  box-sizing: border-box;
  height: 100%;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

#__next {
  height: 100%;
}

a {
  text-decoration: none;
}

h1, h2, h3, h4 {
  margin: 0;
}

p:first-child,
p:last-child {
  margin: 0;
}

img {
  max-width: 100%;
}

button {
  border: none;
  background: none;
}
`;

// mixins

export const textBase = css`
  font-family: ${(props) => props.theme.font.medium.family};
  font-size: ${(props) => props.theme.font.medium.size};
  font-weight: ${(props) => props.theme.font.medium.weight};
  color: ${(props) => props.theme.colors.default};
  line-height: ${(props) => props.theme.line.medium.height};
  a {
    color: ${(props) => props.theme.colors.default};
  }
`;

export const listBase = css`
  ul {
    list-style-image: url("./img/Ellipse.svg");
  }
  ol {
    list-style: none;
    counter-reset: counter;
  }
  ol li {
    counter-increment: counter;
    position: relative;
  }
  ol li::before {
    content: counter(counter) ".";
    position: absolute;
    top: 0;
    left: -24px;
    color: ${(props) => props.theme.colors.brand};
    font-weight: bold;
  }
  li {
    padding-left: 24px;
    padding-bottom: 17px;
  }
  ol li:last-child {
    padding-bottom: 0;
  }

  blockquote {
    padding: 22px 0 22px 38px;
    margin: 20px 0 0 22px;
    border-left: 4px solid ${(props) => props.theme.colors.brand};
  }
`;

export const tableBase = css`
  table {
    display: block;
    border-collapse: collapse;
    min-width: 983px;
    table-layout: fixed;
}
  }
  th {
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 2px solid ${(props) => props.theme.colors.brand};
  }

  td:first-child,
  td:last-child {
    width: 209px;
  }

  td:last-child,
  th:last-child {
    padding-left: 24px;
  }

  td {
    font-size: ${(props) => props.theme.font.small.size};
    font-weight: ${(props) => props.theme.font.small.weight};
    line-height: ${(props) => props.theme.line.small.height};
    vertical-align: top;
    padding: 19px 0;
    border-bottom: 2px solid ${(props) => props.theme.colors.gray_light};
  }

  #table__wrapper {
      width: 100%;
      overflow-x: scroll;
      padding-bottom: 32px;
  }

  #table__wrapper::-webkit-scrollbar {
    display: none;
  }

  @media ${device.laptop} {
    #table__wrapper {
      overflow-x: unset;
    }
  }
`;
export const inputBase = css`
  box-sizing: border-box;
  font-weight: bold;
  padding: 13px 14px 12px 16px;
  border-radius: ${(props) => props.theme.input.border.radius};
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.gray_dark};
  outline-color: ${(props) => props.theme.colors.brand};

  &:not(:required) {
    &::placeholder {
      font-weight: normal;
    }
  }
  width: ${(props) => props.theme.input.size.mobile.width};
  @media ${device.laptop} {
    width: ${(props) => props.theme.input.size.desktop.width};
  }
`;

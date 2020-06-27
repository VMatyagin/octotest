import React from "react";
import { Box } from "../Box";

const spinning = (
  <svg
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.5"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 29C22.5081 29 29 22.5081 29 14.5C29 6.49187 22.5081 0 14.5 0C6.49187 0 0 6.49187 0 14.5C0 22.5081 6.49187 29 14.5 29ZM14.5 24.8571C20.2201 24.8571 24.8571 20.2201 24.8571 14.5C24.8571 8.77991 20.2201 4.14286 14.5 4.14286C8.77991 4.14286 4.14286 8.77991 4.14286 14.5C4.14286 20.2201 8.77991 24.8571 14.5 24.8571Z"
      fill="#C4C4C4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.44424 2.44369C8.82875 0.85041 11.6322 0 14.5 0V4.14286C8.77994 4.14288 4.14291 8.77992 4.14291 14.5C4.14291 17.36 5.30217 19.9493 7.17643 21.8236L4.24696 24.753C2.2191 22.7252 0.838106 20.1415 0.27862 17.3288C-0.280866 14.5161 0.00628264 11.6006 1.10375 8.95109C2.20122 6.30156 4.05973 4.03697 6.44424 2.44369Z"
      fill="#FFFFFF"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 14.5 14.5"
        to="360 14.5 14.5"
        dur="0.8s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

export const Spinner = () => (
  <Box align="center" justify="center">
    {spinning}
  </Box>
);

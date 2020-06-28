import React from "react";
import parse, { domToReact } from "html-react-parser";
import { Box, ProgressBar } from "../../ui/atoms";
import { useScroll } from "./useScroll";
import { useEffect, useState, useRef, RefObject, useCallback } from "react";

export const ParseStringToDOM = (html) => {
  const [scrollRef, scrollPercentage] = useScroll();

  const options = {
    replace: (domNode) => {
      if (!domNode) return;
      if (domNode.name === "table") {
        return (
          <>
            <Box id="table__wrapper" gap="medium" ref={scrollRef}>
              <table>{domToReact(domNode.children, options)}</table>
            </Box>
            <ProgressBar scrollBarPercent={scrollPercentage} />
          </>
        );
      }
    },
  };
  return parse(html, options);
};

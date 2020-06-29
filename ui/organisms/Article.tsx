import { Box, Heading, Text, Image } from "../atoms";
import { ParseStringToDOM } from "../../features/lib/parse-dom-string";
import styled from "styled-components";
import { device } from "../utills/variables";
import { useState } from "react";
import { useClientRect } from "../../features/lib/useClientRect";

const StyledImage = styled(Image)`
  @media ${device.laptop} {
    width: 304px;
    height: 170px;
  }
`;

export const Article = ({ title, body, aside, image, id }: ArticleProps) => {
  const [isFixed,] = useState(false);
  const [, parentRef] = useClientRect();
  const [, asideRef] = useClientRect();
  return (
    <Box
      as="article"
      align="start"
      gap="medium"
      overflow="hidden"
      width="100%"
      id={id}
      ref={parentRef}
    >
      {title && <Heading level={3}>{title}</Heading>}
      <Box
        as="article"
        align="start"
        gap="medium"
        overflow="hidden"
        width="100%"
        responsive
      >
        {body && (
          <Box
            as="section"
            maxWidth="100%"
            responsiveStyle={{
              width: "985px",
            }}
          >
            <Text size="medium" maxWidth="100%">
              {ParseStringToDOM(body)}
            </Text>
          </Box>
        )}
        {aside && (
          <Box
            responsiveStyle={{
              width: "315px",
            }}
            ref={asideRef}
            isFixed={isFixed}
          >
            <Text
              color="gray_dark"
              dangerouslySetInnerHTML={{ __html: aside }}
            />
          </Box>
        )}
      </Box>

      <Box
        direction="row-responsive"
        fill="horizontal"
        justify="space-between"
        position="relative"
      >
        {image &&
          image.map((item) => (
            <StyledImage
              key={item}
              src={item}
              width="162px"
              height="88px"
              alt="Картинки для привлечения внимания"
            />
          ))}
      </Box>
    </Box>
  );
};

interface ArticleProps {
  title: string;
  body: string;
  aside: string;
  image?: string[];
  id?: string;
}

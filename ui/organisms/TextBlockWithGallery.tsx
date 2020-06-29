import { Box, Text, Heading, Image } from "../atoms";
import { ClipBoard } from "../molecules";
import { GalleryType } from "../../features/DataStore";
import { Gallery } from "../../features/organisms/Gallery";
import { device } from "../utills/variables";
import styled from "styled-components";
import { useRef } from "react";

const StyledImage = styled(Image)`
  cursor: pointer;
  @media ${device.laptop} {
    width: 200px;
    height: 130px;
  }
`;

export const TextBlockWithGallery = ({
  title,
  content,
  images,
  description,
  link,
  extra_content,
}: TextBlockWithGalleryProps) => {
  const galleryWrapperRef = useRef(null);
  const imgRef = useRef(null);

  return (
    <Box as="article" align="start" gap="medium" id="gallery" fill="horizontal">
      <Heading level={2}>{title}</Heading>
      <Text
        size="large"
        responsiveStyle={{
          width: "985px",
        }}
      >
        {content}
      </Text>
      <Box
        direction="row"
        fill="horizontal"
        justify="space-between"
        overflow="hidden"
        ref={galleryWrapperRef}
      >
        <Gallery wrapperRef={galleryWrapperRef} imgRef={imgRef}>
          {images &&
            images.map((item, index) => (
              <StyledImage
                ref={index === 1 ? imgRef : undefined}
                key={item.image}
                src={item.image}
                width="162px"
                height="104px"
                alt="Картинка для привлечения внимания"
              />
            ))}
        </Gallery>
      </Box>
      {description && (
        <Text
          size="medium"
          responsiveStyle={{
            width: "985px",
          }}
        >
          {description}
        </Text>
      )}
      {link && (
        <Box responsiveStyle={{ width: "1097px" }}>
          <ClipBoard link={link} />
        </Box>
      )}
      {extra_content && (
        <Text
          size="small"
          responsiveStyle={{
            width: "985px",
          }}
        >
          {extra_content}
        </Text>
      )}
    </Box>
  );
};

interface TextBlockWithGalleryProps {
  title: string;
  content: string;
  description?: string;
  images?: GalleryType[];
  link?: string;
  extra_content?: string;
}

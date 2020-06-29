import { withGallery } from "../lib/withGallery";
import styled from "styled-components";
import { Text } from "../../ui/atoms";

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

const Shadow = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.img_fill};
  width: 100%;
  height: 100%;
  border-radius: ${props => props.theme.img.border.radius}
`;

const ShadowedImageWrapper = ({ children, hidden }: ShadowImageProps) => (
  <Wrapper>{children}
  <Shadow>
    <Text img_fill>Еще {hidden} фото</Text>
  </Shadow>
  </Wrapper>
);

interface ShadowImageProps {
  children: JSX.Element;
  hidden: number;
}

const SimpleGallery = ({ children, countOfVisible, hidden }: GalleryProps) => {
  return (
    <>
      {children.map((item, index) => {
        if (!countOfVisible && index == 1) {
          return item;
        }
        if (index < countOfVisible) {
          if (index == countOfVisible - 1) {
            return <ShadowedImageWrapper children={item} hidden={hidden} />;
          }
          return item;
        }
      })}
    </>
  );
};

interface GalleryProps {
  children: JSX.Element[];
  countOfVisible: number;
  hidden: number;
}

export const Gallery = withGallery(SimpleGallery);

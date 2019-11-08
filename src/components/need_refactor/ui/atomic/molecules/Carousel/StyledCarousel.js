import styled, { createGlobalStyle } from 'styled-components'
/* eslint-disable-next-line */
export const StyledCarousel = styled.div`
  overflow: hidden;
  position: relative;
  height: ${({ height = '80vw' }) => height};
  width: 100%;
  & > div {
    height: ${({ height = '80vw' }) => height};
  }
`

/* eslint-disable-next-line */
export const GlobalStyle = createGlobalStyle`
.slick-next {
  right: 40px;
  margin-top: -25px;
  width: 50px;
  height: 50px;

  &::before {
    content: "\f054";
    font-size: 50px;
    opacity: 1;
    font-family: "FontAwesome";
  }
}

.slick-prev {
  left: 20px;
  z-index: 100;
  margin-top: -25px;
  width: 50px;
  height: 50px;

  &::before {
    content: "\f053";
    font-size: 50px;
    opacity: 1;
    font-family: "FontAwesome";
  }
}

.slick-list,
.slick-track {
  height: 100%;
}

.slick-slide {
  div {
    &:first-child {
      height: 100%;
    }
  }
}

.carousel {
  width: 100%;
  height: 100%;
}
`

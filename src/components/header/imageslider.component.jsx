import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import anime from 'animejs';

const ImageSliderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const animate = () => {
      anime({
        targets: '.image',
        translateX: '100%',
        duration: 1000,
        easing: 'easeInOutQuad',
        complete: () => {
          setCurrentImageIndex(currentIndex => (currentIndex + 1) % images.length);
        }
      });
    };

    const interval = setInterval(animate, 5000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <ImageSliderContainer>
      {images.map((image, index) => (
        <ImageContainer key={image} className={index === currentImageIndex ? 'active image' : 'image'}>
          <Image src={image} />
        </ImageContainer>
      ))}
    </ImageSliderContainer>
  );
};

export default ImageSlider;
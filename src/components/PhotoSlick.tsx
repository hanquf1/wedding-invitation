import { Flex } from '@mint-ui/core';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import photo1 from '../assets/carouselImageList/photo1.jpg';
import photo10 from '../assets/carouselImageList/photo10.jpg';
import photo2 from '../assets/carouselImageList/photo2.jpg';
import photo3 from '../assets/carouselImageList/photo3.jpg';
import photo4 from '../assets/carouselImageList/photo4.jpg';
import photo5 from '../assets/carouselImageList/photo5.jpg';
import photo6 from '../assets/carouselImageList/photo6.jpg';
import photo7 from '../assets/carouselImageList/photo7.jpg';
import photo8 from '../assets/carouselImageList/photo8.jpg';
import photo9 from '../assets/carouselImageList/photo9.jpg';

const imageList = [ photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10 ];

function PhotoItem({ src, ...rest }: any) {
  return <img {...rest} src={src} alt={src} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />;
}

export function PhotoSlick() {
  return (
    <Flex>
      <Carousel
        infiniteLoop
        swipeScrollTolerance={50}
        showStatus
      >
        {
          imageList.map((_, index) => (
            <PhotoItem src={imageList[index]} />
          ))
        }

      </Carousel>
    </Flex>
  );
}
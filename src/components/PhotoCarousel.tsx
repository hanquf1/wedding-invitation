import { Carousel, Flex } from '@mint-ui/core';
import { useState } from 'react';
import styled from 'styled-components';

import photo1 from '../assets/photo1.jpeg';
import photo2 from '../assets/photo2.jpeg';
import photo3 from '../assets/photo3.jpeg';
import photo4 from '../assets/photo4.jpeg';

const imageList = [ photo1, photo2, photo3, photo4 ];

function PhotoItem({ src, ...rest }: any) {
  return <img {...rest} src={src} alt={src} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />;
}

const StyleCarousel = styled(Flex)`
`;
let startX = 0;
let endX = 0;

const StyleDot = styled.div`
  display: inline-block;
  content: "";
  margin: 3px;
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background: ${(props: any) => (props.active ? '#e6a79d' : '#ccc')};
`;

export function PhotoCarousel() {
  // console.log('PhotoCarousel', imageList);

  const [ handleState, setHandleState ] = useState<any>({
    move: () => {
    },
    moveto: () => {
    },
  });

  const handleTouchStart = (e: any) => {
    startX = e.touches[0].pageX;
    console.log('start', startX);
  };

  const handleTouchEnd = (e: any) => {
    endX = e.changedTouches[0].pageX;
    if (startX > endX) {
      handleState.move('right');
    } else {
      handleState.move('left');
    }
  };

  const [ currentIndex, setCurrentIndex ] = useState<number>(0);

  return (
    <Flex>
      사진

      <StyleCarousel style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>

        <Carousel
          width='100%'
          height='100%'
          defaultIndex={0}
          total={imageList.length}
          onLoad={setHandleState}
          render={(index: number) => (
            <PhotoItem
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              src={imageList[index]}
              handlePhotoMove={setHandleState}
            />
          )}
          onChange={(index) => setCurrentIndex(index)}
        />
        <Flex flexAlign='center' flexSize='40px' rowDirection>
          {
            imageList.map((_, index) => (
              <StyleDot<any> key={index} active={currentIndex === index} />
            ))
          }
        </Flex>

      </StyleCarousel>
    </Flex>
  );
}
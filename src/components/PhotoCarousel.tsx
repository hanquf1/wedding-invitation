import { Carousel, Flex } from '@mint-ui/core';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import photo1 from '../assets/photo1.jpeg';
import photo2 from '../assets/photo2.jpeg';
import photo3 from '../assets/photo3.jpeg';
import photo4 from '../assets/photo4.jpeg';

const imageList = [ photo1, photo2, photo3, photo4 ];

function PhotoItem({ src, ...rest }) {
  return <img {...rest} src={src} alt={src} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />;
}

const StyleCarousel = styled(Flex)`
  .mint-carousel-item {
      // transform: ${(props) => (`translateX(${props.moveX * -1}px)`)};
  }
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
  background: ${(props) => (props.active ? '#e6a79d' : '#ccc')};
`;

export function PhotoCarousel() {
  // console.log('PhotoCarousel', imageList);

  const [ handleState, setHandleState ] = useState<any>({
    move: () => {
    },
    moveto: () => {
    },
  });

  const handleTouchStart = (e) => {
    startX = e.touches[0].pageX;
    console.log('start', startX);
  };

  const handleTouchEnd = (e) => {
    endX = e.changedTouches[0].pageX;
    if (startX > endX) {
      handleState.move('right');
    } else {
      handleState.move('left');
    }
  };

  const [ moveX, setMoveX ] = useState(0);
  const handleTouchMove = (e) => {
    setMoveX(startX - e.touches[0].clientX);
  };

  const [ currentIndex, setCurrentIndex ] = useState<number>(0);

  return (
    <Flex>
      사진

      <StyleCarousel moveX={moveX} style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>

        <Carousel
          width='100%'
          height='100%'
          defaultIndex={0}
          total={imageList.length}
          onLoad={setHandleState}
          render={(index) => (
            <PhotoItem
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              src={imageList[index]}
              handlePhotoMove={setHandleState}
            />
          )}
          onChange={(index) => setCurrentIndex(index)}
        />
        <Flex flexAlign='center' flexSize='40px' rowDirection>
          {
            imageList.map((item, index) => (
              <StyleDot key={index} active={currentIndex === index} />
            ))
          }
        </Flex>

      </StyleCarousel>
    </Flex>
  );
}
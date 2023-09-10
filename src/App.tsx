import './App.css';

import { Button, Carousel, Flex } from '@mint-ui/core';
import { useState } from 'react';
import styled from 'styled-components';

import mailIcon from './assets/mailIcon.svg';
import mainPhoto from './assets/main.jpeg';
import map from './assets/map.png';
import photo1 from './assets/photo1.jpeg';
import photo2 from './assets/photo2.jpeg';
import photo3 from './assets/photo3.jpeg';
import photo4 from './assets/photo4.jpeg';
import plant1 from './assets/plant1.png';
import plant2 from './assets/plant2.png';
import plant3 from './assets/plant3.png';
import secondMain from './assets/secondMain.jpeg';
import whiteFlowBottom from './assets/whiteFlowBottom.png';
import whiteFlowerTop from './assets/whiteFlowerTop.png';
import { PhotoCarousel } from './components/PhotoCarousel';
// import photo5 from './assets/photo5.jpeg';
// import { CanvasArea } from './game/CanvasArea';

const AppStyle = styled(Flex)`
`;

const widthSize = 300;
const minWidthSize = 375;

const ImageContainerStyle = styled(Flex)`
  border-top-left-radius: 200px;
  border-top-right-radius: 200px;
  border: 4px solid #cc6666; 
  width: ${widthSize}px;
  height: 390px;
  overflow: hidden;
`;

const ImageStyle = styled.img`
  width: 100%;
  position: absolute;
  top: -4px;
  //maxWidth: '700px', minWidth: '300px', maxHeight: '1000px'
`;

const ImagePlant1Style = styled.img`
  position: absolute;
  width: 54px;
  bottom: 0;
  left: 31px;
`;
const ImagePlant2Style = styled.img`
  position: absolute;
  width: 47px;
  top: 1px;
  right: 50px;
`;
const ImagePlant3Style = styled.img`
  position: absolute;
  width: 82px;
  bottom: 0;
  right: 0;
`;

const SecondMainPhotoStyle = styled(Flex)`
  border-radius: 50px;
  border: 4px solid #cc6666; 
  width: ${widthSize}px;
  //height: 400px;
  overflow: hidden;
`;

const WhiteFlowerTopStyle = styled.img`
  position: absolute;
  width: 80px;
  top: 0;
  left: 0;
`;
const WhiteFlowerTopRightStyle = styled.img`
  transform: scaleX(-1);
  position: absolute;
  width: 80px;
  top: 0;
  right: 0;
`;
const WhiteFlowerBottomLeftStyle = styled.img`
  position: absolute;
  width: 80px;
  bottom: 0;
  left: 3px;
`;
const WhiteFlowerBottomRightStyle = styled.img`
  transform: scaleX(-1);
  position: absolute;
  width: 80px;
  bottom: 0;
  right: 3px;
`;

function App() {
  return (
    <AppStyle flexAlign='center' flexGap='55px'>

      <Flex>

        {/* wedding */}
        <Flex flexSize='160px' style={{ fontSize: '32px', fontWeight: 700 }} flexAlign='center'>
          <span style={{ color: '#792e13' }}>WEDDING DAY</span>
        </Flex>
        {/* <Flex> */}
        {/* <CanvasArea /> */}
        {/* </Flex> */}

        {/* main 사진 */}
        <Flex flexSize='373px' style={{ maxHeight: '1000px' }} flexAlign='center'>
          <Flex flexAlign='center' style={{ width: `${minWidthSize}px` }}>

            <ImageContainerStyle flexAlign='center'>
              <ImageStyle src={mainPhoto} alt='결혼메인사진' />
            </ImageContainerStyle>
            <ImagePlant1Style src={plant1} alt='plant1' />
            <ImagePlant2Style src={plant2} alt='plant2' />
            <ImagePlant3Style src={plant3} alt='plant3' />
          </Flex>
        </Flex>

        {/* 장소 시간 */}
        <Flex flexAlign='center'>
          <Flex flexAlign='center' flexSize='150px' style={{ fontSize: '18px', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: '#6F5C51', width: `${widthSize}px` }}>
            <span>2023년 12월 16일 토요일 PM 3:50</span>
            <span>건대 스타시티아트홀</span>
            <br />
            신랑 장한별 / 신부 류한나
          </Flex>
        </Flex>
      </Flex>

      {/* 초대합니다 & 두번째 메인 사진. */}
      <Flex flexAlign='center'>

        <Flex flexSize='200px' flexAlign='center' style={{ width: `${widthSize}px` }}>
          <Flex flexSize='30px' flexAlign='left-center' flexGap='6px' rowDirection style={{ fontSize: '18px', color: '#6F5C51' }}>
            <img style={{ width: '20px' }} src={mailIcon} alt='mainicon' />
            초대 합니다
          </Flex>
          <Flex flexAlign='center' style={{ fontSize: '18px', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: '#6F5C51', padding: '20px 0' }}>
            앞으로 함께 걸어갈 ‘한별&한나’의 여정,
            그 출발에 당신을 초대합니다.
            <br />
            따뜻한 축복과 함께해 주시면 감사하겠습니다.
          </Flex>
        </Flex>

        <Flex flexAlign='center' flexSize='450px'>
          <Flex flexAlign='center' style={{ width: `${minWidthSize}px` }}>
            <SecondMainPhotoStyle>
              <img alt='신랑신부가 손을 흔드는 사진' style={{ width: '100%', transform: 'scale(1.1)', transformOrigin: 'top' }} src={secondMain} />
            </SecondMainPhotoStyle>
            <WhiteFlowerTopStyle src={whiteFlowerTop} />
            <WhiteFlowerTopRightStyle src={whiteFlowerTop} />
            <WhiteFlowerBottomLeftStyle src={whiteFlowBottom} />
            <WhiteFlowerBottomRightStyle src={whiteFlowBottom} />
          </Flex>
        </Flex>
      </Flex>

      {/* 위치 정보, 지도 */}
      <Flex flexGap='20px' flexAlign='center' style={{ width: `${widthSize}px` }}>
        <Flex flexSize='60px' flexAlign='left-center' flexGap='6px' rowDirection style={{ fontSize: '18px', color: '#6F5C51' }}>
          <img style={{ width: '20px' }} src={mailIcon} alt='mainicon' />
          위치
        </Flex>

        <Flex flexSize='350px' style={{ backgroundColor: '#fff' }} flexAlign='center'>
          <img style={{ width: '100%' }} src={map} alt='지도' />

          <Flex flexSize='150px' flexAlign='left-center' style={{ paddingLeft: '5px', fontSize: '10px' }}>
            <p>주   소 |  서울 광진구 능동로 110, 스타시티영존 5층 (화양동 4-20)</p>
            <br />
            <p>주   차 |  건물 내 B1~B5 2시간 무료, 건대병원 주차장 1시간 30분 무료</p>
            <br />
            <p>지하철 |  건대입구역 2호선 2번출구  7호선  3번출구</p>
            <br />
            <p>버   스 |  240  721  2016  2222  3217  3220  4212  102  3500</p>
          </Flex>

        </Flex>

        <Flex flexSize='28px' rowDirection flexAlign='center' flexGap='10px'>
          <Flex flexAlign='left-center' flexGap='6px' rowDirection style={{ fontSize: '11px', color: 'black', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            <img style={{ width: '20px' }} src={mailIcon} alt='mainicon' />
            주소 복사하기
          </Flex>
          <Flex flexAlign='left-center' flexGap='6px' rowDirection style={{ fontSize: '11px', color: 'black', backgroundColor: 'rgba(255, 255, 255, 0.5)' }} onClick={() => (window.open('https://naver.me/5girhnXo'))}>
            <img style={{ width: '20px' }} src={mailIcon} alt='mainicon' />
            <span>
              <span style={{ textShadow: ' 0px 1px 5px rgba(166, 194, 133, 1)' }}>네이버</span> 길찾기
            </span>
          </Flex>
          <Flex flexAlign='left-center' flexGap='6px' rowDirection style={{ fontSize: '11px', color: 'black', backgroundColor: 'rgba(255, 255, 255, 0.5)' }} onClick={() => (window.open('http://kko.to/IBa3lj4oz7'))}>
            <img style={{ width: '20px' }} src={mailIcon} alt='mainicon' />
            <span>
              <span style={{ textShadow: ' 0px 1px 5px rgba(255, 227, 0, 1)' }}>카카오</span> 길찾기
            </span>

          </Flex>
          {/* <span style={{ backgroundColor: 'green', borderRadius: '20px', padding: '10px' }} onClick={() => (window.open('https://naver.me/5girhnXo'))}> */}
          {/*  네이버 길찾기 */}
          {/* </span> */}
          {/* <span style={{ backgroundColor: 'yellow', borderRadius: '20px', padding: '10px' }} onClick={() => (window.open('http://kko.to/IBa3lj4oz7'))}> */}
          {/*  카카오 길찾기 */}
          {/* </span> */}
        </Flex>
      </Flex>

      <Flex flexSize='500px' flexGap='5px' flexAlign='center' style={{ width: `${widthSize}px` }}>
        <PhotoCarousel />
      </Flex>

      <Flex flexAlign='center'>
        --------------
      </Flex>
    </AppStyle>
    // <>
    //   축 결혼
    //
    //   {/* <div> */}
    //   {/*  <a href='https://vitejs.dev' target='_blank' rel='noreferrer'> */}
    //   {/*    <img src={viteLogo} className='logo' alt='Vite logo' /> */}
    //   {/*  </a> */}
    //   {/*  <a href='https://react.dev' target='_blank' rel='noreferrer'> */}
    //   {/*    <img src={reactLogo} className='logo react' alt='React logo' /> */}
    //   {/*  </a> */}
    //   {/* </div> */}
    //   {/* <h1>Vite + React</h1> */}
    //   {/* <div className='card'> */}
    //   {/*  <button onClick={() => setCount((count) => count + 1)}> */}
    //   {/*    count is {count} */}
    //   {/*  </button> */}
    //   {/*  <p> */}
    //   {/*    Edit <code>src/App.tsx</code> and save to test HMR */}
    //   {/*  </p> */}
    //   {/* </div> */}
    //   {/* <p className='read-the-docs'> */}
    //   {/*  Click on the Vite and React logos to learn more */}
    //   {/* </p> */}
    // </>
  );
}

export default App;
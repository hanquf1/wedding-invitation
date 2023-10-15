import './App.css';

import { Flex } from '@mint-ui/core';
import styled from 'styled-components';

import heartIcon from './assets/icons/heartIcon.svg';
import mailIcon from './assets/icons/mailIcon.svg';
import mapIcon from './assets/icons/mapIcon.svg';
import photoIcon from './assets/icons/photoIcon.svg';
import mainPhoto from './assets/main.jpeg';
import plant1 from './assets/plant1.png';
import plant2 from './assets/plant2.png';
import plant3 from './assets/plant3.png';
import secondMain from './assets/secondMain.jpeg';
// import whiteFlowBottom from './assets/whiteFlowBottom.png';
// import whiteFlowerTop from './assets/whiteFlowerTop.png';
// import { Board } from './components/Board';
// import { PhotoCarousel } from './components/PhotoCarousel';
import { Account } from './components/Account';
import { Location } from './components/Location';
import { PhotoSlick } from './components/PhotoSlick';
import { Title } from './components/Title';
// import photo5 from './assets/photo5.jpeg';
// import { CanvasArea } from './game/CanvasArea';
const AppStyle = styled(Flex)`
`;

const widthSize = 300;
const minWidthSize = 350;

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

const ImagePlantLeftBottomStyle = styled.img`
  position: absolute;
  width: 54px;
  bottom: 0;
  left: -1px;
`;
const ImagePlantRightTopStyle = styled.img`
  position: absolute;
  width: 47px;
  top: 1px;
  right: 31px;
  z-index: -1;
`;
const ImagePlantRightBottomStyle = styled.img`
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

// const WhiteFlowerTopStyle = styled.img`
//   position: absolute;
//   width: 80px;
//   top: 0;
//   left: 0;
// `;
// const WhiteFlowerTopRightStyle = styled.img`
//   transform: scaleX(-1);
//   position: absolute;
//   width: 80px;
//   top: 0;
//   right: 0;
// `;
// const WhiteFlowerBottomLeftStyle = styled.img`
//   position: absolute;
//   width: 80px;
//   bottom: 0;
//   left: 3px;
// `;
// const WhiteFlowerBottomRightSt≈yle = styled.img`
//   transform: scaleX(-1);
//   position: absolute;
//   width: 80px;
//   bottom: 0;
//   right: 3px;
// `;

function App() {
  return (
    <AppStyle flexAlign='center' flexGap='55px'>
      {/* 메인 사진, 인사 */}
      <Flex>
        {/* <Flex> */}
        {/* <CanvasArea /> */}
        {/* </Flex> */}

        {/* wedding */}
        <Flex flexSize='160px' style={{ fontSize: '32px', fontWeight: 700 }} flexAlign='center'>
          <span style={{ color: '#792e13' }}>Wedding Day</span>
        </Flex>

        {/* main 사진 */}
        <Flex flexSize={`${minWidthSize}px`} style={{ maxHeight: '1000px' }} flexAlign='center'>
          <Flex flexAlign='center' style={{ width: `${minWidthSize}px` }}>

            <ImageContainerStyle flexAlign='center'>
              <ImageStyle src={mainPhoto} alt='결혼메인사진' />
            </ImageContainerStyle>
            <ImagePlantRightTopStyle src={plant2} alt='plant2' />
            <ImagePlantLeftBottomStyle src={plant1} alt='plant1' />
            <ImagePlantRightBottomStyle src={plant3} alt='plant3' />
          </Flex>
        </Flex>

        {/* 장소 시간 */}
        <Flex flexAlign='center' style={{ marginTop: '30px' }}>
          <Flex
            flexAlign='center'
            flexSize='160px'
            style={{
              fontSize: '18px',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              color: '#6F5C51',
              width: `${widthSize}px`,
              padding: '10px 0',
            }}
          >
            <span>2023년 12월 16일 토요일 PM 3:50</span>
            <span>건대 스타시티아트홀</span>
            <br />
            <Flex>
              <Flex rowDirection flexAlign='center'>
                장지필 <span style={{ margin: '3px' }}>·</span>김명옥<span style={{ fontSize: '11px', margin: '10px' }}>의 장남</span> 한별
              </Flex>
              <Flex rowDirection flexAlign='center'>
                류순열 <span style={{ margin: '3px' }}>·</span>김어자<span style={{ fontSize: '11px', margin: '10px' }}>의 장녀</span> 한나
              </Flex>

            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* 초대합니다 & 두번째 메인 사진. */}
      <Flex flexAlign='center' flexGap='20px'>

        <Flex flexSize='200px' flexAlign='center' style={{ width: `${widthSize}px` }}>
          <Title title='초대 합니다' imageUrl={mailIcon} alt='mailIcon' />
          <Flex
            flexAlign='center'
            style={{
              fontFamily: 'Se-hwa',
              fontSize: '23px',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              color: '#6F5C51',
              padding: '10px 0',
            }}
          >
            앞으로 함께 걸어갈 ‘한별&한나’의 여정, <br />
            그 출발에 당신을 초대합니다.
            <br />
            따뜻한 축복과 함께해 주시면 감사하겠습니다.
          </Flex>
        </Flex>

        <Flex flexAlign='center' flexSize='420px'>
          <Flex flexAlign='center' style={{ width: `${minWidthSize}px` }}>
            <SecondMainPhotoStyle>
              <img
                alt='신랑신부가 손을 흔드는 사진'
                style={{ width: '100%', transform: 'scale(1.1)', transformOrigin: 'top' }}
                src={secondMain}
              />
            </SecondMainPhotoStyle>
            {/* <WhiteFlowerTopStyle src={whiteFlowerTop} /> */}
            {/* <WhiteFlowerTopRightStyle src={whiteFlowerTop} /> */}
            {/* <WhiteFlowerBottomLeftStyle src={whiteFlowBottom} /> */}
            {/* <WhiteFlowerBottomRightStyle src={whiteFlowBottom} /> */}
          </Flex>
        </Flex>
      </Flex>

      {/* 위치 정보, 지도 */}
      <Flex flexGap='20px' flexAlign='center' style={{ width: `${widthSize}px` }}>
        <Title title='지도' imageUrl={mapIcon} alt='mapIcon' />
        <Location />
      </Flex>

      {/* 사진 캐러셀 */}
      <Flex flexGap='5px' flexAlign='center' style={{ width: `${widthSize}px` }}>
        {/* <PhotoCarousel /> */}
        <Title title='사진' imageUrl={photoIcon} alt='photoIcon' />
        <PhotoSlick />
      </Flex>

      {/* 마음 보내기 */}
      <Flex flexGap='5px' flexAlign='center' style={{ width: `${widthSize}px` }}>
        <Title title='마음 보내기' imageUrl={heartIcon} alt='heartIcon' />
        <Account />
      </Flex>
      <Flex flexGap='5px' flexAlign='center' style={{ width: `${widthSize}px`, marginBottom: '10px' }}>
        <span style={{ fontSize: '10px' }}> designed by hanna & created by hanbyul </span>
      </Flex>

    </AppStyle>
  );
}

export default App;
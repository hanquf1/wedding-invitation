import { Flex } from '@mint-ui/core';
import { MintMap, Position, MapMarkerWrapper, Offset } from '@mint-ui/map';
import copy from 'copy-to-clipboard';

import { Environment } from '../../env';
import copyIcon from '../assets/icons/copyIcon.png';
import mapFIndIcon from '../assets/icons/mapFIndIcon.svg';

const Marker = () => (
  <svg width='25' height='45' viewBox='0 0 32 45' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <mask id='path-1-outside-1_1536_517' maskUnits='userSpaceOnUse' x='0' y='0' width='32' height='45' fill='black'>
      <rect fill='white' width='32' height='45' />
      <path fillRule='evenodd' clipRule='evenodd' d='M30 16C30 18.2274 29.4798 20.3333 28.5543 22.2029C27.7552 24.0571 26.5902 26.0337 24.9761 27.9853C20.7684 33.0731 16 39.3516 16 42.9231C16 39.3516 11.2316 33.0731 7.02388 27.9853C5.40982 26.0337 4.24485 24.0571 3.44566 22.2029C2.52017 20.3333 2 18.2274 2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16Z' />
    </mask>
    <path fillRule='evenodd' clipRule='evenodd' d='M30 16C30 18.2274 29.4798 20.3333 28.5543 22.2029C27.7552 24.0571 26.5902 26.0337 24.9761 27.9853C20.7684 33.0731 16 39.3516 16 42.9231C16 39.3516 11.2316 33.0731 7.02388 27.9853C5.40982 26.0337 4.24485 24.0571 3.44566 22.2029C2.52017 20.3333 2 18.2274 2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16Z' fill='#EA4335' />
    <path d='M28.5543 22.2029L27.5631 21.7122C27.5545 21.7296 27.5463 21.7473 27.5386 21.7651L28.5543 22.2029ZM24.9761 27.9853L24.1238 27.2805L24.1238 27.2805L24.9761 27.9853ZM14.894 42.9231C14.894 43.5339 15.3892 44.0291 16 44.0291C16.6108 44.0291 17.106 43.5339 17.106 42.9231H14.894ZM7.02388 27.9853L7.87619 27.2805L7.87619 27.2805L7.02388 27.9853ZM3.44566 22.2029L4.46136 21.7651C4.45367 21.7473 4.44551 21.7296 4.43689 21.7122L3.44566 22.2029ZM29.5456 22.6936C30.5449 20.6749 31.106 18.4014 31.106 16H28.894C28.894 18.0534 28.4148 19.9918 27.5631 21.7122L29.5456 22.6936ZM25.8284 28.6902C27.5096 26.6574 28.7295 24.5908 29.57 22.6407L27.5386 21.7651C26.7808 23.5233 25.6707 25.41 24.1238 27.2805L25.8284 28.6902ZM17.106 42.9231C17.106 42.252 17.3368 41.3534 17.8239 40.2417C18.3041 39.1457 18.9976 37.9221 19.8384 36.6242C21.5202 34.0281 23.7306 31.2268 25.8284 28.6902L24.1238 27.2805C22.0139 29.8316 19.7362 32.7135 17.9819 35.4215C17.1047 36.7756 16.3431 38.1092 15.7978 39.354C15.2593 40.5829 14.894 41.8084 14.894 42.9231H17.106ZM6.17157 28.6902C8.26941 31.2268 10.4798 34.0281 12.1616 36.6242C13.0024 37.9221 13.6959 39.1457 14.1761 40.2417C14.6632 41.3534 14.894 42.252 14.894 42.9231H17.106C17.106 41.8084 16.7407 40.5829 16.2022 39.354C15.6569 38.1092 14.8953 36.7756 14.0181 35.4215C12.2638 32.7135 9.98607 29.8316 7.87619 27.2805L6.17157 28.6902ZM2.42997 22.6407C3.2705 24.5908 4.49038 26.6574 6.17157 28.6902L7.87619 27.2805C6.32927 25.41 5.2192 23.5233 4.46136 21.7651L2.42997 22.6407ZM0.893971 16C0.893971 18.4014 1.45511 20.6749 2.45444 22.6936L4.43689 21.7122C3.58523 19.9918 3.10603 18.0534 3.10603 16H0.893971ZM16 0.893971C7.65717 0.893971 0.893971 7.65717 0.893971 16H3.10603C3.10603 8.87886 8.87886 3.10603 16 3.10603V0.893971ZM31.106 16C31.106 7.65717 24.3428 0.893971 16 0.893971V3.10603C23.1211 3.10603 28.894 8.87886 28.894 16H31.106Z' fill='#C6221F' mask='url(#path-1-outside-1_1536_517)' />
    <circle cx='15.9999' cy='15.8256' r='5.53015' fill='#B41412' />
  </svg>
);

export function Location() {
  const handleCopy = (value: string) => {
    console.log('string', value);
    copy(value);
  };

  const center = new Position(37.5407309, 127.0714632);

  console.log('import.meta.env.VITE_NAVER_KEY', import.meta.env.VITE_NAVER_KEY);
  console.log('import.meta.env.VITE_GOOGLE_KEY', import.meta.env.VITE_GOOGLE_KEY);
  console.log('TEST', import.meta.env.TEST);
  console.log('Environment.VITE_NAVER_KEY', Environment.VITE_NAVER_KEY);
  return (
    <Flex flexGap='20px'>

      <Flex flexSize='350px' style={{ backgroundColor: '#fff' }} flexAlign='center'>
        {/* <img style={{ width: '100%' }} src={map} alt='지도' /> */}
        <div style={{ height: '200px', width: '300px' }}>

          <MintMap
            draggable
            mapType='naver'
            mapKey={Environment.VITE_NAVER_KEY}
            // onLoad={(map, controller) => setControllerState(controller)}
            // center={new Position(127.0714632, 37.5407309)}
            // base={{ center, zoomLevel: 16, minZoomLevel: 1 }}
            base={{ center, zoomLevel: 16 }}
          >
            <MapMarkerWrapper
              anchor={new Offset(12, 43)}
              position={center}
            >
              <Marker />
            </MapMarkerWrapper>

          </MintMap>
        </div>

        <Flex flexSize='150px' flexAlign='left-center' style={{ paddingLeft: '5px', fontSize: '10px' }}>
          <p>주 소 | 서울 광진구 능동로 110, 스타시티영존 5층 (화양동 4-20)</p>
          <br />
          <p>주 차 | 건물 내 B1~B5 2시간 무료, 건대병원 주차장 1시간 30분 무료</p>
          <br />
          <p>지하철 | 건대입구역 2호선 2번출구 7호선 3번출구</p>
          <br />
          <p>버 스 | 240 721 2016 2222 3217 3220 4212 102 3500</p>
        </Flex>

      </Flex>

      <Flex flexSize='28px' rowDirection flexAlign='center' flexGap='10px'>
        <Flex
          onClick={() => handleCopy('서울 광진구 능동로 110')}
          flexAlign='left-center'
          flexGap='6px'
          rowDirection
          style={{
            fontFamily: 'Se-hwa',
            fontSize: '17px',
            color: 'black',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <img style={{ width: '20px' }} src={copyIcon} alt='mainicon' />
          주소 복사하기
        </Flex>
        <Flex
          flexAlign='left-center'
          flexGap='6px'
          rowDirection
          style={{ fontSize: '11px', color: 'black', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
          onClick={() => (window.open('https://naver.me/5girhnXo'))}
        >
          <img style={{ width: '20px' }} src={mapFIndIcon} alt='mainicon' />
          <span style={{ fontFamily: 'Se-hwa', fontSize: '17px' }}>
            <span style={{
              fontFamily: 'Se-hwa',
              fontSize: '17px',
              textShadow: ' 0px 1px 5px rgba(166, 194, 133, 1)',
            }}
            >네이버
            </span> 길찾기
          </span>
        </Flex>
        <Flex
          flexAlign='left-center'
          flexGap='6px'
          rowDirection
          style={{ fontSize: '11px', color: 'black', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
          onClick={() => (window.open('http://kko.to/IBa3lj4oz7'))}
        >
          <img style={{ width: '20px' }} src={mapFIndIcon} alt='mainicon' />
          <span style={{ fontFamily: 'Se-hwa', fontSize: '17px' }}>
            <span style={{
              fontFamily: 'Se-hwa',
              fontSize: '17px',
              textShadow: ' 0px 1px 5px rgba(255, 227, 0, 1)',
            }}
            >카카오
            </span> 길찾기
          </span>

        </Flex>
      </Flex>
    </Flex>
  );
}
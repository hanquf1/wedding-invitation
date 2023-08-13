import './App.css';

// import mainPhoto from './assets/main-photo.jpeg';
import { Flex } from '@mint-ui/core';

// import mainPhoto from './assets/img-test.jpg';
import mainPhoto from './assets/main-photo.jpeg';
import map from './assets/map.png';
import photo1 from './assets/photo1.jpeg';
import photo2 from './assets/photo2.jpeg';
import photo3 from './assets/photo3.jpeg';
import photo4 from './assets/photo4.jpeg';
import photo5 from './assets/photo5.jpeg';

function App() {
  return (
    <Flex flexAlign='center' flexGap='100px'>
      <Flex style={{ marginTop: '100px', fontSize: '32px', fontWeight: 700 }} flexAlign='center'>
        <span style={{ color: '#792e13' }}>WEDDING DAY</span>
      </Flex>
      <Flex style={{ maxHeight: '1000px' }} flexAlign='center'>
        <img src={mainPhoto} alt='결혼메인사진' style={{ maxWidth: '700px', minWidth: '300px', maxHeight: '1000px' }} />
      </Flex>

      <Flex flexAlign='center' style={{}}>
        <span style={{ fontSize: '18px' }}>2023년 12월 16일 토요일 PM 03:50</span>
        <span style={{ fontSize: '18px' }}>건대 스타시티아트홀</span>
      </Flex>
      <Flex flexAlign='center' style={{ fontSize: '20px' }}>
        한별 & 한나
      </Flex>
      <Flex flexAlign='center' style={{ padding: '0 20px 0 20px' }}>
        신선한 눈송이처럼 매력적인 12월, 우리의 결혼식에 당신을 초대합니다. 따뜻한 축복과 함께해 주시면 감사하겠습니다.
      </Flex>
      <Flex flexGap='5px' rowDirection flexAlign='center' style={{ maxWidth: '700px', width: '95%', flexWrap: 'wrap' }}>
        <Flex>
          <img
            style={{ objectFit: 'cover', borderRadius: '30px', border: '3px solid #fff' }}
            src={photo1}
            alt='결혼메인사진'
            width='100%'
            height='280px'
          />
        </Flex>
        <img
          style={{ objectFit: 'cover', borderRadius: '30px', border: '3px solid #fff' }}
          src={photo2}
          alt='결혼메인사진'
          width='49%'
          height='280px'
        />
        <img
          style={{ objectFit: 'cover', borderRadius: '30px', border: '3px solid #fff' }}
          src={photo3}
          alt='결혼메인사진'
          width='49%'
          height='280px'
        />
        <img
          style={{ objectFit: 'cover', borderRadius: '30px', border: '3px solid #fff' }}
          src={photo4}
          alt='결혼메인사진'
          width='49%'
          height='280px'
        />
        <img
          style={{ objectFit: 'cover', borderRadius: '30px', border: '3px solid #fff' }}
          src={photo5}
          alt='결혼메인사진'
          width='49%'
          height='280px'
        />
      </Flex>
      <Flex style={{ width: '90%' }}>
        <img style={{ width: '100%' }} src={map} alt='지도' />
      </Flex>
      <Flex rowDirection flexAlign='center' flexGap='10px'>
        <span style={{ backgroundColor: 'green', borderRadius: '20px', padding: '10px' }} onClick={() => (window.open('https://naver.me/5girhnXo'))}>
          네이버 길찾기
        </span>
        <span style={{ backgroundColor: 'yellow', borderRadius: '20px', padding: '10px' }} onClick={() => (window.open('http://kko.to/IBa3lj4oz7'))}>
          카카오 길찾기
        </span>
      </Flex>
      <Flex flexAlign='center'>
        --------------
      </Flex>
    </Flex>
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
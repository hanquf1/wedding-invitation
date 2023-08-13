import { useState } from 'react';

import reactLogo from './assets/react.svg';

import './App.css';

import viteLogo from '../public/vite.svg';

// import mainPhoto from './assets/main-photo.jpeg';
import mainPhoto from './assets/img-test.jpg';

import { Flex } from '@mint-ui/core';

function App() {
  return (
    <Flex flex>

      <Flex flexSize='500px' flexAlign='center'>
        <img src={mainPhoto} alt='결혼메인사진' height={500} />
      </Flex>
      <Flex flexAlign='center'>
        결혼 이름들
      </Flex>
      <Flex flexAlign='center'>
        결혼 날짜
      </Flex>
      <Flex flexAlign='center'>
        블라블라
      </Flex>
      <Flex>
        장소
      </Flex>
      <Flex>
        장소
      </Flex>
      축축
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
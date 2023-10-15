import { Flex } from '@mint-ui/core';
import copy from 'copy-to-clipboard';
import styled from 'styled-components';

const CopyStyled = styled.span`
  cursor: pointer;
  color: #6F5C51;
  //font-family: Se-hwa,serif; 
  padding: 2px 6px;
  border-radius: 1px;
  background-color: #ddd;

`;

export function Account() {
  const handleCopy = (value: string) => {
    console.log('string', value);
    copy(value);
  };

  return (
    <Flex
      flexAlign='center'
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '10px 0', fontSize: '14px' }}
    >
      <Flex onClick={() => handleCopy('96270101269051 국민은행')}>
        신랑 계좌
        <Flex rowDirection justifyContent='space-between'>
          국민은행 96270101-269051 <CopyStyled>복사하기</CopyStyled> <br />
        </Flex>
        (장한별)
      </Flex>
      <br />
      <Flex onClick={() => handleCopy('100015927253 토스뱅크')}>
        신부 계좌
        <Flex rowDirection justifyContent='space-between'>
          토스뱅크 1000-1592-7253 <CopyStyled>복사하기</CopyStyled> <br />
        </Flex>
        (류한나)
      </Flex>
    </Flex>
  );
}
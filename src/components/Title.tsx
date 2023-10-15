import { Flex } from '@mint-ui/core';
import styled from 'styled-components';

const TitleStyled = styled(Flex)`
  font-family: Se-hwa;
  font-size: 22px;
`;

export interface TitleProps {
  title: string;
  imageUrl: string;
  alt: string;
}

export function Title({ title, imageUrl, alt }: TitleProps) {
  return (
    <TitleStyled flexSize='60px' flexAlign='left-center' flexGap='6px' rowDirection>
      <img style={{ width: '20px' }} src={imageUrl} alt={alt} />
      {title}
    </TitleStyled>
  );
}
import styled from 'styled-components'

export const TitleHeader = styled.h1`
  color: ${({theme}) => theme.colors.background};
  font-size: 36px;
  font-weight: 900;
  line-height: 40px;
  letter-spacing: 0.2px;

    span{
      color: ${({theme}) => theme.colors.secondary.main};
    }
`

export const Title = styled.h2`
  color: ${({theme}) => theme.colors.gray[900]};
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
`
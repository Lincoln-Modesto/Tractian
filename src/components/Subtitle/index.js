import styled from 'styled-components'

export const Subtitle = styled.h4`
  color: ${({theme}) => theme.colors.secondary.main};
  font-weight: 700;
`

export const SubtitleHeader = styled.h4`
  color: ${({theme}) => theme.colors.gray[100]};
  font-weight: 200;
  font-size: 16px;
`

export const Paragraph = styled.p`
  color: ${({theme}) => theme.colors.gray[900]};
  font-weight: 300;
  font-size: 14px;
  line-height: 22px;
`

export const SubtitleFooter = styled.h4`
  color: ${({theme}) => theme.colors.primary.lighter};
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
`


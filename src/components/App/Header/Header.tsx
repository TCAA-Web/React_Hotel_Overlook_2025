import styled from '@emotion/styled'
import { HeaderImage } from './HeaderImage'
import { HeaderTitleDetail } from './HeaderTitleDetail'
import { HeaderTitle } from './HeaderTitle'
import { Typography } from '../../Shared/Typography'

interface HeaderInterface {
  title: string
  imageUrl: string
}

const StyledHeader = styled.header`
  width: 100%;
  height: 40vh;
  position: relative;
`

export const Header = ({ title, imageUrl }: HeaderInterface) => {
  return (
    <StyledHeader>
      <HeaderTitle>
        <Typography variant='h4'>{title}</Typography>

        <HeaderTitleDetail />
      </HeaderTitle>
      <HeaderImage src={imageUrl}></HeaderImage>
    </StyledHeader>
  )
}

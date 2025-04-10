import styled from '@emotion/styled'
import { darken } from 'khroma'

interface TextFieldInterface {
  withBorder?: boolean
}

export const TextField = styled.input<TextFieldInterface>`
  height: 46px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.pureWhite};
  color: ${(props) => props.theme.colors.black};
  border: ${(props) => (props.withBorder ? `solid 1px ${props.theme.colors.outlineColor}` : 'none')};
  padding-left: ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.radius.primary};
  box-shadow: ${(props) => props.theme.shadow.lighter};
  font-size: ${(props) => props.theme.fontSize.sm};
  margin: ${(props) => props.theme.spacing.sm} 0;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    outline: solid 2px ${(props) => darken(props.theme.colors.outlineColor, 15)};
  }
`

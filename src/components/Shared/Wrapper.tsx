import { CSSProperties, ReactNode } from 'react'
import styled from '@emotion/styled'

interface WrapperInterface {
  children: ReactNode
  width?: string
  maxWidth?: string
  dir?: 'column' | 'row'
  sx?: CSSProperties
}

export const Wrapper = styled.section<WrapperInterface>`
  display: flex;
  margin: auto;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '1200px')};
  gap: ${(props) => props.theme.spacing.md};
  width: ${(props) => (props.width ? props.width : 'auto')};
  flex-direction: ${(props) => (props.dir ? props.dir : 'column')};
`

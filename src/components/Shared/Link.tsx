import { css } from '@emotion/react'
import { NavLink } from 'react-router'
import { Theme } from '../../theme'

interface LinkInterface {
  children: React.ReactNode
  mode?: 'dark' | 'light'
  to: string
}

const linkCssDark = css`
  color: white;
  text-decoration: none;
  font-family: ${Theme.font.primary};
  font-size: 12pt;
  &:hover {
    color: red;
  }
`

const linkCssLight = css`
  color: black;
  text-decoration: none;
  font-family: ${Theme.font.primary};
  font-size: 12pt;

  &:hover {
    color: red;
  }
`

export const Link = ({ children, to, mode }: LinkInterface) => {
  return (
    <NavLink
      style={({ isActive }) => (isActive ? { color: Theme.colors.red } : {})}
      css={mode === 'dark' ? linkCssDark : linkCssLight}
      to={to}
      aria-label={`link-to-${to}`}
    >
      {children}
    </NavLink>
  )
}

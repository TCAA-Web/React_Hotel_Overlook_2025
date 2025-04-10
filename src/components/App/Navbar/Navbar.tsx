import styled from '@emotion/styled'
import { Link } from '../../Shared/Link'
import { Logo } from '../../Shared/Logo'
import { ListContainer } from '../../Shared/ListContainer'
import { ListItem } from '../../Shared/ListItem'
import logoImage from '../../../assets/logo/logo.png'

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: black;
`

export const Navbar = () => {
  const navItems = [
    { path: '/', text: 'HOME', id: 1 },
    { path: '/destinationer', text: 'DESTINATIONER', id: 2 },
    { path: '/login', text: 'LOGIN', id: 3 },
  ]

  return (
    <Nav>
      <Logo src={logoImage} alt={'hotel_overlook_logo'} />
      <ListContainer align='center' justify='center'>
        {navItems.map((route) => (
          <ListItem key={route.id} textAlign='center'>
            <Link mode={'dark'} to={route.path}>
              {route.text}
            </Link>
          </ListItem>
        ))}
      </ListContainer>
    </Nav>
  )
}

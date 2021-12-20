import logo from '../../assets/logo.png'
import arrowDown from '../../assets/arrow.svg'

import { Header as Container, NavList } from './styles'
import { Button } from '../Button';

export function Header() {
  return (
    <Container>
      <div>
        <NavList>
          <li>
            <img className='logo' src={logo} />
          </li>
          <li>
            O produto
            <img src={arrowDown} />
          </li>
          <li>
            Sobre nós
            <img src={arrowDown} />
          </li>
          <li>
            Blog
            <img src={arrowDown} />
          </li>
          <li>
            Área do Cliente
            <img src={arrowDown} />
          </li>
          <li></li>
        </NavList>
        <div className='content-buttons'>
        <a>Login</a>  
        <Button>Cadastre-se</Button>
        </div>
      </div>
    </Container>
  );
}
import { Header as Container, NavList } from './styles';
import { Button, LeakedButton } from '../Button';
import { TitleHeader } from '../Title';
import { SubtitleHeader } from '../Subtitle';

import logo from '../../assets/logo.png';
import arrowDown from '../../assets/arrow.svg';
import baseIllustration from '../../assets/group.svg';
import arrowRight from '../../assets/vector.svg'

export function Header() {
  return (
    <Container>

      <div className='nav'>
        <NavList>
          <li>
            <img className='logo' src={logo} alt='logo'/>
          </li>
          <li>
            O produto
            <img src={arrowDown} alt='arrow-down'/>
          </li>
          <li>
            Sobre nós
            <img src={arrowDown} alt='arrow-down'/>
          </li>
          <li>
            Blog
          </li>
          <li>
            Área do Cliente
          </li>
          <li></li>
        </NavList>
        <div className='content-buttons'>
          <a href='http://#'>Login</a>
          <Button small >Cadastre-se <img src={arrowRight} alt='arrow-right'/></Button>
        </div>
      </div>

      <div className='content'>
  
        <div className='content-infos'>
          <TitleHeader>
            Sensores inteligentes que trazem
            <span> desempenho</span>
          </TitleHeader>
          <SubtitleHeader>
            Evite falhas nas suas máquinas e torne o tempo de inatividade uma coisa do
            passado com sistema preditivo da TRACTIAN.
          </SubtitleHeader>
          <div>
            <Button>Demonstração</Button>
            <LeakedButton>Saiba Mais</LeakedButton>
          </div>
        </div>

        <div className='content-illustration'>
          <img src={baseIllustration} alt='illustration'/>
        </div>
      </div>

    </Container>
  );
}
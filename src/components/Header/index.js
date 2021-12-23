import { Header as Container } from './styles';
import { Button, LeakedButton } from '../Button';
import { TitleHeader } from '../Title';
import { SubtitleHeader } from '../Subtitle';

import baseIllustration from '../../assets/group.svg';
import engr1 from '../../assets/animate/engr1.svg';
import engr2 from '../../assets/animate/engr2.svg';
import engr3 from '../../assets/animate/engr3.svg';
import engr4 from '../../assets/animate/engr4.svg';
import engr5 from '../../assets/animate/engr5.svg';
import engr6 from '../../assets/animate/engr6.svg';
import engr7 from '../../assets/animate/engr7.svg';

export function Header() {
  return (
    <>
      <Container>
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
          <img src={engr1} alt='engr' className='e1'/>
          <img src={engr2} alt='engr'className='e2'/>
          <img src={engr3} alt='engr' className='e3'/>
          <img src={engr4} alt='engr'className='e4'/>
          <img src={engr5} alt='engr'className='e5'/>
          <img src={engr6} alt='engr'className='e6'/>
          <img src={engr7} alt='engr'className='e7'/>
          <img src={baseIllustration} alt='illustration' className='illustration'/>
        </div>
      </div>

    </Container>

    </>
  
  );
}
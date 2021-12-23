import { SubtitleFooter } from "../Subtitle";
import { Container, Content } from "./styles";

import invest1 from '../../assets/invest1.png';
import invest2 from '../../assets/invest2.png';
import award1 from '../../assets/award1.png';
import award2 from '../../assets/award2.png';
import award3 from '../../assets/award3.png';
import linkedin from '../../assets/linkedin.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import youtube from '../../assets/youtube.svg';


export function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <div>
            <SubtitleFooter>Produto</SubtitleFooter>
            <a href="http://#">Sensor Tractian</a>
            <a href="http://#">Plataforma</a>
            <a href="http://#">Funcionalidades</a>
            <a href="http://#">Planos e preços</a>
          </div>
          <div>
            <SubtitleFooter>Materiais</SubtitleFooter>
            <a href="http://#">Guias e E-books</a>
            <a href="http://#">Checklists</a>
            <a href="http://#">Intensivão</a>
            <a href="http://#">Calculadora</a>
          </div>
          <div>
            <SubtitleFooter>Sobre a Tractian</SubtitleFooter>
            <a href="http://#">Guias e E-books</a>
            <a href="http://#">Checklists</a>
            <a href="http://#">Intensivão</a>
            <a href="http://#">Calculadora</a>
          </div>
          <div>
            <SubtitleFooter>Fale Conosco</SubtitleFooter>
            <a href="http://#">Contato</a>
            <a href="http://#">Indique e Ganhe</a>
            <a href="http://#">Agende uma demonstração</a>
            <span>
              © Tractian Tecnologia Ltda <br/>
              <small>CNPJ: 35.755.699/0001-84</small>
            </span>
          </div>
        </div>
        <div className="content-icons">
          <div>
            <SubtitleFooter>Investidos Por</SubtitleFooter>
            <div className="invests">
              <img src={invest1} alt="invest"/>
              <img src={invest2} alt="invest"/>
            </div>
          </div>
          <div>
            <SubtitleFooter>Reconhecimento</SubtitleFooter>
            <div className="awards">
              <img src={award1} alt="award"/>
              <img src={award2} alt="award"/>
              <img src={award3} alt="award"/>
            </div>
          </div>
          <div>
            <SubtitleFooter>Conecte-se com a Tractian</SubtitleFooter>
            <div className="icons">
              <img src={linkedin} alt="linkedin"/>
              <img src={facebook} alt="facebook"/>
              <img src={instagram} alt="instagram"/>
              <img src={youtube} alt="youtube"/>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  )
}
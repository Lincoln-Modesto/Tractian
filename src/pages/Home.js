import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Container, Content } from "./styles";
import { Paragraph } from "../components/Subtitle";
import { Button } from "../components/Button";

import check from '../assets/check.svg';
import imgSection1 from '../assets/tractian.png';
import imgSection2 from '../assets/tractian2.png';
import imgSection3 from '../assets/tractian3.png';
import imgSection4 from '../assets/tractian4.png';
import arrowRight from '../assets/arrow-right.svg';


export function Home() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Title>Manutenção preditiva sem complicação</Title>
          <Content>
            <div className="content-main">
              <ul>
                <li>
                  <div className="check">
                    <img src={check} alt="check" />
                  </div>
                  Sensor Plug & Play</li>
                <li>
                  <div className="check">
                    <img src={check} alt="check" />
                  </div>
                  Monitoramento Online</li>
                <li>
                  <div className="check">
                    <img src={check} alt="check" />
                  </div>
                  Gestão de Ativos</li>
                <li>
                  <a
                    href="https://tractian.com/sensor-tractian"
                    target="_blank"
                    rel="noreferrer">
                    <img src={arrowRight} alt="arrow-right" />
                    Confira todos os benefícios</a>
                </li>
              </ul>

            </div>
            <div className="img-hero">
              <img src={imgSection1} alt="sensors tractian" />
            </div>
          </Content>
        </Container>

        <Container>
          <Title>Monitoramento online de ponta</Title>
          <Content>
            <div className="content-main">
              <img src={imgSection2} />
            </div>
            <div>
              <Paragraph>
                Conectamos seus ativos aos nossos sensores IoT que conseguem medir
                com precisão a temperatura, vibração, horímetro e consumo de energia
                estimado.
                <br /><br />
                Todas as informações são enviadas em tempo real para nossa plataforma,
                onde você tem acesso a tudo de forma fácil e online. Sem a necessidade
                de gateways ou infraestrutura própria para salvar e analisar esses
                dados.
              </Paragraph>
              <br />
              <Button>Demonstração</Button>
            </div>
          </Content>
        </Container>

        <Container>
          <Title>Sensores de monitoramento</Title>
          <Content>
            <div className="section-3 content-main">
              <ul>
                <li>
                  <div className="number">
                    <span>1</span>
                  </div>
                  <div>
                    <h5>Nós te enviamos os sensores</h5>
                    <small>Via correios</small>
                  </div>
                </li>
                <li>
                  <div className="number">
                    <span>2</span>
                  </div>
                  <div>
                    <h5>Cole em suas máquinas</h5>
                    <small>isso mesmo, igual um <h6>Bandaid</h6>!</small>
                  </div>
                </li>
                <li>
                  <div className="number">
                    <span>3</span>
                  </div>
                  <div>
                    <h5>Receba insights valiosos</h5>
                    <small>Pronto, isso é tudo para começar a receber dados de 
                      vibração, temperatura e análises sobre a 
                      saúde do equipamento.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div className="content-sensors">
             <img src={imgSection3}/>
             <span>Conheça nossos sensores:</span>
             <div>
               <Button blue>Smart Tract</Button>
               <Button blue>Brand Tract</Button>
             </div>
            </div>
          </Content>
        </Container>

        <Container>
          <Title>Plataforma de gestão de ativos</Title>
          <Content reverse>
            <div className="section-4 content-main" >
              <ul>
                <li>
                  <div className="number">
                    <span>1</span>
                  </div>
                  <div>
                    <h5>Nós te enviamos os sensores</h5>
                    <small>Via correios</small>
                  </div>
                </li>
                <li>
                  <div className="number">
                    <span>2</span>
                  </div>
                  <div>
                    <h5>Cole em suas máquinas</h5>
                    <small>isso mesmo, igual um <h6>Bandaid</h6>!</small>
                  </div>
                </li>
                <li>
                  <div className="number">
                    <span>3</span>
                  </div>
                  <div>
                    <h5>Receba insights valiosos</h5>
                    <small>Pronto, isso é tudo para começar a receber dados de 
                      vibração, temperatura e análises sobre a 
                      saúde do equipamento.</small>
                  </div>
                </li>
              </ul>
            </div>
            <img src={imgSection4}/>
          </Content>
        </Container>
      </main>
    </>


  )
}
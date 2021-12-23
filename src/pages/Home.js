import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Container, Content, ContainerBackgroundBlue } from "./styles";
import { Paragraph, Subtitle } from "../components/Subtitle";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";

import check from '../assets/check.svg';
import imgSection1 from '../assets/tractian.png';
import imgSection2 from '../assets/tractian2.png';
import imgSection3 from '../assets/tractian3.png';
import imgSection4 from '../assets/tractian4.png';
import imgSection5 from '../assets/tractian5.png';
import arrowRight from '../assets/arrow-right.svg';

import settings from '../assets/settings.svg';
import cool from '../assets/cool-icon.svg';
import trending from '../assets/trending-up.svg';

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
                    <Subtitle>Confira todos os benefícios</Subtitle>
                  </a>
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
              <img src={imgSection2} alt="sensors-tractian" />
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

        <ContainerBackgroundBlue>
          <Card
            icon={settings}
            color="orange"
            title={"Disponível para +100 tipos de máquinas"}
            paragraph={`Motores, Mancais, Compressores, 
            Bombas, HVAC, Rolamentos, Ventiladores, Prensas, Turbinas e Rolamentos.`}/>
          <Card
            icon={cool}
            color="blue"
            title={"Visão Geral das Máquinas"}
            paragraph={`Laudos Técnicos, Últimos Insights, Ativos em Alerta, 
            Indicadores Gerais de Manutenção, Calendário de OS e muito mais.
            `}/>
          <Card
            icon={trending}
            title={"Analytics e Insights Automáticos"}
            paragraph={` Horímetro, Status de Vibração, Curva de Temperatura e 
            Insights sobre Falhas Mecânicas e Anomalias. Com Alarmes via WhatsApp 
            ou Email.`}/>
        </ContainerBackgroundBlue>

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
              <img src={imgSection3} alt="sensors-tractian" />
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
            <img src={imgSection4} alt="sensors-tractian" />
          </Content>
        </Container>

        <Container>
          <Title>A melhor plataforma para o monitoramento dos seus ativos</Title>
          <Content reverse>
            <div className="content-main">
              <Subtitle className="subtitle">Suas máquinas mais seguras.</Subtitle>
              <br/>
              <Paragraph>
                Nossa plataforma consegue oferecer o que há de mais avançado em
                manutenção preditiva. Tenha acesso a toda a parte de analytics e
                espectro de seus equipamentos, veja em uma interface simples a
                confiabilidade e disponibilidade de seus ativos, receba insights
                automáticos e alertas via Email ou WhatsApp, solicite ordens de
                serviço às pessoas certas e monitore todas as suas máquinas em um
                único lugar.
              </Paragraph>
              <Button>Demonstração</Button>
            </div>
            <img src={imgSection5} alt="sensors-tractian" className="img-section5" />
          </Content>
        </Container>

        <Footer/>
      </main>
    </>


  )
}
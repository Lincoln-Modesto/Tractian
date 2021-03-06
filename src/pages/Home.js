import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Container, Content, ContainerBackgroundBlue } from "./styles";
import { Paragraph, Subtitle } from "../components/Subtitle";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Nav, NavList } from '../components/Header/styles'

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
import arrowRightVector from '../assets/vector.svg'
import logo from '../assets/logo.png';
import arrowDown from '../assets/arrow.svg';

import AOS from 'aos';

export function Home() {

  AOS.init();

  function handleMobileButton(event) {

    const nav = document.getElementById('nav-list');
    nav.classList.toggle('active');

    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active);
  }

  return (
    <>
      <Nav>
        <div className='nav'>
          <img className='logo' src={logo} alt='logo' />
          <div
            aria-label="open menu"
            aria-haspopup="true"
            aria-controls="menu"
            aria-expanded="false"
            className="mobile-menu"
            onClick={handleMobileButton}>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
          <div id="nav-list">
            <NavList>
              <li className='item-list'>
                O produto
                <img src={arrowDown} alt='arrow-down' />
              </li>
              <li className='item-list'>
                Sobre n??s
                <img src={arrowDown} alt='arrow-down' />
              </li>
              <li className='item-list'>
                Blog
              </li>
              <li className='item-list'>
                ??rea do Cliente
              </li>
            </NavList>
            <div className='content-buttons'>
              <a href='http://#'>Login</a>
              <Button small >Cadastre-se <img src={arrowRightVector} alt='arrow-right' /></Button>
            </div>
          </div>
        </div>
      </Nav>

      <Header />
      <main>
        <Container>
          <Title>Manuten????o preditiva sem complica????o</Title>
          <Content>
            <div className="content-main section1">
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
                  Gest??o de Ativos</li>
                <li>
                  <a
                    href="https://tractian.com/sensor-tractian"
                    target="_blank"
                    rel="noreferrer">
                    <img src={arrowRight} alt="arrow-right" />
                    <Subtitle>Confira todos os benef??cios</Subtitle>
                  </a>
                </li>
              </ul>

            </div>
            <div className="img-hero" data-aos="fade-left">
              <img
                src={imgSection1}
                alt="sensors tractian" />
            </div>
          </Content>
        </Container>

        <Container>
          <Title>Monitoramento online de ponta</Title>
          <Content>
            <div className="content-main img-hero2" data-aos="fade-right">
              <img src={imgSection2} alt="sensors-tractian" />
            </div>
            <div>
              <Paragraph>
                Conectamos seus ativos aos nossos sensores IoT que conseguem medir
                com precis??o a temperatura, vibra????o, hor??metro e consumo de energia
                estimado.
                <br /><br />
                Todas as informa????es s??o enviadas em tempo real para nossa plataforma,
                onde voc?? tem acesso a tudo de forma f??cil e online. Sem a necessidade
                de gateways ou infraestrutura pr??pria para salvar e analisar esses
                dados.
              </Paragraph>
              <br />
              <Button>Demonstra????o</Button>
            </div>
          </Content>
        </Container>

        <ContainerBackgroundBlue>
          <Card
            icon={settings}
            color="orange"
            title={"Dispon??vel para +100 tipos de m??quinas"}
            paragraph={`Motores, Mancais, Compressores, 
            Bombas, HVAC, Rolamentos, Ventiladores, Prensas, Turbinas e Rolamentos.`} />
          <Card
            icon={cool}
            color="blue"
            title={"Vis??o Geral das M??quinas"}
            paragraph={`Laudos T??cnicos, ??ltimos Insights, Ativos em Alerta, 
            Indicadores Gerais de Manuten????o, Calend??rio de OS e muito mais.
            `} />
          <Card
            icon={trending}
            title={"Analytics e Insights Autom??ticos"}
            paragraph={` Hor??metro, Status de Vibra????o, Curva de Temperatura e 
            Insights sobre Falhas Mec??nicas e Anomalias. Com Alarmes via WhatsApp 
            ou Email.`} />
        </ContainerBackgroundBlue>

        <Container>
          <Title>Sensores de monitoramento</Title>
          <Content >
            <div className="section-3 content-main">
              <ul>
                <li>
                  <div className="number">
                    <span>1</span>
                  </div>
                  <div>
                    <h5>N??s te enviamos os sensores</h5>
                    <small>Via correios</small>
                  </div>
                </li>
                <li>
                  <div className="number">
                    <span>2</span>
                  </div>
                  <div>
                    <h5>Cole em suas m??quinas</h5>
                    <small>isso mesmo, igual um <h6>Bandaid</h6>!</small>
                  </div>
                </li>
                <li>
                  <div className="number">
                    <span>3</span>
                  </div>
                  <div>
                    <h5>Receba insights valiosos</h5>
                    <small>Pronto, isso ?? tudo para come??ar a receber dados de
                      vibra????o, temperatura e an??lises sobre a
                      sa??de do equipamento.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div className="content-sensors" data-aos="fade-left">
              <img src={imgSection3} alt="sensors-tractian" />
              <span>Conhe??a nossos sensores:</span>
              <div>
                <Button blue>Smart Tract</Button>
                <Button blue>Brand Tract</Button>
              </div>
            </div>
          </Content>
        </Container>

        <Container>
          <Title>Plataforma de gest??o de ativos</Title>
          <Content reverse>
            <div className="section-4 content-main" >
              <ul>
                <li>
                  <div className="number">
                    <span>1</span>
                  </div>
                  <div>
                    <h5>Nos envie sua lista Ativos, Locais e Usu??rios</h5>
                    <small>Deixaremos tudo pronto para voc??</small>
                  </div>
                </li>
                <li>
                  <div className="number">
                    <span>2</span>
                  </div>
                  <div>
                    <h5>Automatize seus Planos e Ordens de Servi??o</h5>
                    <small>Organizar, planejar e sequenciar: O.S, checklists
                      e inspe????es</small>
                  </div>
                </li>
                <li>
                  <div className="number">
                    <span>3</span>
                  </div>
                  <div>
                    <h5>Substitua o Excel por completo</h5>
                    <small>A plataforma vai abrir as Ordens de servi??os e distribui-las,
                      permitindo que toda a equipe de manuten????o se preocupe apenas em
                      executar suas atividades de rotina.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div data-aos="fade-right" className="img-section4">
              <img src={imgSection4} alt="sensors-tractian" />
            </div>
          </Content>
        </Container>

        <Container>
          <Title>A melhor plataforma para o monitoramento dos seus ativos</Title>
          <Content reverse>
            <div className="content-main">
              <Subtitle className="subtitle">Suas m??quinas mais seguras.</Subtitle>
              <br />
              <Paragraph>
                Nossa plataforma consegue oferecer o que h?? de mais avan??ado em
                manuten????o preditiva. Tenha acesso a toda a parte de analytics e
                espectro de seus equipamentos, veja em uma interface simples a
                confiabilidade e disponibilidade de seus ativos, receba insights
                autom??ticos e alertas via Email ou WhatsApp, solicite ordens de
                servi??o ??s pessoas certas e monitore todas as suas m??quinas em um
                ??nico lugar.
              </Paragraph>
              <Button>Demonstra????o</Button>
            </div>
            <div data-aos="fade-up">
              <img src={imgSection5} alt="sensors-tractian" className="img-section5" />
            </div>
          </Content>
        </Container>

        <Footer />
      </main>
    </>


  )
}
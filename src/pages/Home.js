import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Container, Content } from "./styles";

import check from '../assets/check.svg'
import imgSection1 from '../assets/tractian.png'
import arrowRight from '../assets/arrow-right.svg'

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Title>Manutenção preditiva sem complicação</Title>
          <Content>
            <div>
              <ul>
                <li>
                  <div>
                    <img src={check} alt="check" />
                  </div>
                  Sensor Plug & Play</li>
                <li>
                  <div>
                    <img src={check} alt="check" />
                  </div>
                  Monitoramento Online</li>
                <li>
                  <div>
                    <img src={check} alt="check" />
                  </div>
                  Gestão de Ativos</li>
                <li>
                  <a 
                  href="https://tractian.com/sensor-tractian" 
                  target="_blank"
                  rel="noreferrer">
                  <img src={arrowRight} alt="arrow-right"/>
                    Confira todos os benefícios</a>
                </li>
              </ul>

            </div>
            <div className="img-hero">
              <img src={imgSection1} alt="sensors tractian"/>
            </div>
          </Content>
        </Container>
      </main>
    </>


  )
}
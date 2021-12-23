import { Container, Badge } from "./style";

import AOS from 'aos';
import 'aos/dist/aos.css'

export function Card({ icon, title, paragraph, color}){

  AOS.init();

  return(
    <Container data-aos="fade-up">
      <Badge color={color}>
        <img src={icon} alt="icon"/>
      </Badge>

      <span>{title}</span>

      <div className="divisor"></div>

      <small>
        {paragraph}
      </small>
    </Container>
  )
}
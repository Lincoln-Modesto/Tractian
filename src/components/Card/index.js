import { Container, Badge } from "./style";

export function Card({ icon, title, paragraph, color}){
  return(
    <Container>
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
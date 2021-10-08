import { Center } from "../sharedStyles";
import { Container } from "./styles";

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Container>
      <Center>
        <small>{currentYear}</small>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <a href="https://ubonggeorge.com" rel="noopener" target="_blank">
          <small>See more on George&apos;s portfolio</small>
        </a>
      </Center>
    </Container>
  )
}
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Main = styled.h2`
  width: 100%;
  font-size: 10rem;
  line-height: 11rem;
  font-family: ${(props) => props.theme.fonts.fancy};
`

const NotFound = () => (
  <Container>
    <Main>404</Main>
    Oops! Page not found!
  </Container>
)

export default NotFound;
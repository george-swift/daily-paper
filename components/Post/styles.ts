import styled from "styled-components";

export const Card = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 19rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 600px) {
    margin-left: auto;
    margin-right: auto;
  }
`

export const Figure = styled.figure`
  max-width: 100%;
  margin: 0;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
`

export const Content = styled.div`
  flex: 1 1 auto;
  padding: 1rem 1rem;

  p {
    color: ${(props) => props.theme.colors.gray};
  }

  &:hover * {
    color: ${(props) => props.theme.colors.pink};
  }
`

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
  color: #212529;
`

export const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;
`

export const PostBodyTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.fancy};
  font-size: calc(1rem + 0.9vw);
  line-height: 1.2;
  letter-spacing: -1px;
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    font-size: calc(1.5rem + 0.9vw);
  }
`

export const PostBodyFigure = styled.figure`
  max-width: 100%;
  margin: 0 0 1.5rem;
`

export const PostMeta = styled.div`
  margin-top: 2.5rem;
  text-align: end;

  span {
    color: ${(props) => props.theme.colors.gray};
  }
`
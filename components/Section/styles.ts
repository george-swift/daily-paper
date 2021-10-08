import styled from "styled-components";

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.navy};
  font-family: ${(props) => props.theme.fonts.fancy};
  font-size: calc(1rem + 0.9vw);
  line-height: 1.2;
  letter-spacing: -1px;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: calc(1.5rem + 0.9vw);
    margin-bottom: 1.5rem;
    text-align: center;
  }
`

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &::after {
    content: '';
    flex: auto;
  }

  &::after,
  & > * {
    width: calc(33% - 10px);
    margin-bottom: 1.25rem;
  }

  @media (max-width: 800px) {
    &::after,
    & > * {
      width: 100%;
    }
  }
`

export const MoreLink = styled.a`
  margin: -20px 0 30px;
  display: inline-block;
  vertical-align: top;

  @media (max-width: 600px) {
    margin-left: 1rem;
  }
`
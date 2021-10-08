import styled from "styled-components";

export const Container = styled.article`
  padding: 10px 0;
`

export const Author = styled.h4`
  display: block;
  font-size: 0.9rem;
`

export const Body = styled.p`
  font-size: 13px;
  margin: 0.2rem 0;
`

export const Meta = styled.footer`
  color: ${(props) => props.theme.colors.gray};
  font-size: 0.8em;
`

export const Form = styled.form`
  margin-bottom: 1.5rem;

  & > * {
    margin-bottom: 0.75rem;
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fonts.basic};
    font-weight: 400;
    line-height: 1.5;
  }

  h3 {
    color: ${(props) => props.theme.colors.gray};
  }

  input,
  textarea {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    background-color: white;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    font-size: 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    @media (min-width: 810px) {
      max-width: 500px;
    }
  }

  input:focus,
  textarea:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }

  textarea {
    height: 100px;
  }

  button {
    display: inline-block;
    padding: 0.375rem 0.75rem;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: #0d6efd;
    border: 1px solid #0d6efd;
    font-size: 1rem;
    color: white;
    border-radius: 0.25rem;
    transition:
      color 0.15s ease-in-out,
      background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;

    &:hover,
    &:focus {
      background-color: #0b5ed7;
      border-color: #0a58ca;
    }

    &:focus {
      box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 50%);
    }
  }

  @media (max-width: 500px) {
    button {
      width: 100%;
    }
  }
`

export const CommentSection = styled.section`
  max-width: 800px;
  margin: 1.5rem auto 0;

  & > h3 {
    letter-spacing: -1px;
    font-family: ${(props) => props.theme.fonts.basic};
    margin-bottom: 1rem;
  }
`

export const ListGroup = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;
`

export const Item = styled.li`
  list-style: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`
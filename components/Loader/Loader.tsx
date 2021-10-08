import { Container } from "./styles";
import { FaSpinner } from 'react-icons/fa';

export const Loader = () => (
  <Container>
    <p>
      <FaSpinner />
    </p>
  </Container>
)
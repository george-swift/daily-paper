import Link from 'next/link';
import { Center } from '../sharedStyles';
import { Container, Logo } from './styles';

export const Header = () => (
  <Container>
    <Center>
      <Logo>
        <Link href="/">
          <a>Daily Paper</a>
        </Link>
      </Logo>
    </Center>
  </Container>
)
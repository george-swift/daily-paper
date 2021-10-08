import Link from 'next/link';
import { Post } from '../../shared/types';
import { Container } from './styles';

type BreadcrumbsProps = {
  post: Post
}

export const Breadcrumbs = ({ post }: BreadcrumbsProps) => (
  <Container>
    <Link href="/">
      <a>Home</a>
    </Link>
    <span>/</span>
    <Link href={`/category/${post.category}`}>
      <a>{post.category}</a>
    </Link>
  </Container>
)
import Link from 'next/link';
import Image from 'next/image';
import { Card, Figure, Title, Content } from "./styles";
import { Post as PostType } from '../../shared/types';

type PostProps = {
  post: PostType
}

export const Post = ({ post }: PostProps) => (
  <Link href={`/post/${post.id}`} passHref>
    <Card>
      <Figure>
        <Image
          src={post.image}
          alt={post.title}
          loading="lazy"
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          width={304}
          height={180}
        />
      </Figure>
      <Content>
        <Title>{post.title}</Title>
        <p>
          {post.content}
        </p>
      </Content>
    </Card>
  </Link>
)
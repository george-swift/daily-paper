import Link from "next/link";
import Image from "next/image";
import { Post } from "../../shared/types";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import { PostBodyFigure, PostBodyTitle, PostMeta, Wrapper } from "./styles";

type PostBodyProps = {
  post: Post
}

export const PostBody = ({ post }: PostBodyProps) => (
  <Wrapper>
    <Breadcrumbs post={post} />
    <PostBodyTitle>{post.title}</PostBodyTitle>
    <PostBodyFigure>
      <Image
        src={post.image}
        alt={post.title}
        loading="lazy"
        layout="responsive"
        objectFit="cover"
        objectPosition="center"
        width={800}
        height={400}
      />
    </PostBodyFigure>
    <p dangerouslySetInnerHTML={{ __html: post.content }} />
    <PostMeta>
      <span>
        <small>{post.date}</small>
      </span>
      &nbsp;&nbsp;
      <span>&bull;</span>
      &nbsp;&nbsp;
      <Link href={`/category/${post.category}`}>
        <a>{post.category}</a>
      </Link>
      &nbsp;&nbsp;
      <span>&bull;</span>
      &nbsp;&nbsp;
      <a href={post.source} rel="noopener" target="_blank">
        Source
      </a>
    </PostMeta>
  </Wrapper>
)
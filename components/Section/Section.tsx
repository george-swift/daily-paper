import Link from 'next/link';
import { Grid, MoreLink, Title } from "./styles";
import { Post } from "../Post/Post";
import { Post as PostType } from "../../shared/types";

type SectionProps = {
  title: string
  posts: PostType[]
  isCompact?: boolean
}

export const Section = ({
    title,
    posts,
    isCompact = false
  }: SectionProps) => (
  <section>
    <Title>{title}</Title>
    <Grid>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Grid>

    {isCompact && (
      <Link href={`/category/${title}`} passHref>
        <MoreLink>
          More in {title}
        </MoreLink>
      </Link>
    )}
  </section>
)
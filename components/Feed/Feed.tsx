import { Post, Category } from "../../shared/types";
import { Section } from "../Section/Section";

type FeedProps = {
  posts: Post[]
  categories: Category[]
}

export const Feed = ({ posts, categories }: FeedProps) => (
  <>
    {categories.map((category) => {
      const inSection = posts.filter((post) => post.category === category)

      return (
        <Section
          key={category}
          title={category}
          posts={inSection}
          isCompact
        />
      )
    })}
  </>
)
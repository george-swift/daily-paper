import { useRouter } from 'next/router'
import { Post } from "../../shared/types";
import { fetchByCategory } from '../../api/category';
import { categoryPaths as paths } from '../../shared/staticPaths';
import { Loader } from '../../components/Loader/Loader';
import { Section } from '../../components/Section/Section';

export async function getStaticPaths() {
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { id } = params

  if (typeof id !== 'string') {
    return { notFound: true }
  }

  const posts = await fetchByCategory(id)
  return { props: { posts } }
}

type CategoryProps = {
  posts: Post[]
}

export default function CategoryPage({ posts }: CategoryProps) {
  const router = useRouter()

  if (router.isFallback) return <Loader />

  const title = posts[0].category

  return <Section title={title} posts={posts} />
}
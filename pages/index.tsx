import Head from 'next/head'
import { fetchCategories, fetchPosts } from '../api/summary'
import { Feed } from '../components/Feed/Feed'
import { Post, Category } from '../shared/types'

export async function getStaticProps() {
  const categories = await fetchCategories()
  const posts = await fetchPosts()

  return {
    props: { posts, categories }
  }
}

type FrontProps = {
  posts: Post[]
  categories: Category[]
}

export default function Front({ posts, categories }: FrontProps) {
  return (
    <>
      <Head>
        <title>Daily Paper</title>
      </Head>
      <Feed posts={posts} categories={categories} />
    </>
  )
}
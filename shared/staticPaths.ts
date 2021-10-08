import { Category, EntityId } from "./types";

type PostStaticParams = {
  id: EntityId
}

type PostStaticPath = {
  params: PostStaticParams
}

const staticPostsIdList: EntityId[] = Array(18).fill(1).map((x, y) => x + y)

export const paths: PostStaticPath[] = staticPostsIdList.map(
  (id) => ({
    params: { id: String(id)}
  })
)

type CategoryStaticParams = {
  id: Category
}

type CategoryStaticPath = {
  params: CategoryStaticParams
}

const categoriesToPreRender: Category[] = [
  "Arts",
  "Science",
  "Technology"
]

export const categoryPaths: CategoryStaticPath[] = categoriesToPreRender.map(
  (category) => ({ params: { id: category }})
)
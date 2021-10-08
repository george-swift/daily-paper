export type UriString = string

export type UniqueString = string

export type EntityId = number | UniqueString

export type Category = 'Technology' | 'Science' | 'Arts'

export type DateISOString = string

export type Post = {
  id: EntityId
  date: DateISOString
  category: Category
  title: string
  content: string
  image: UriString
  source: UriString
}

export type Person = string

export type RelativeTime = string

export type Comment = {
  id: EntityId
  author: Person
  content: string
  time: RelativeTime
  post: EntityId
}

export type AddNewComment = {
  post: EntityId
  name: Person
  comment: string
}

export type Optional<T> = T | null
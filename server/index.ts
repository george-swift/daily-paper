import express from 'express';
import cors from 'cors';
import categories from './categories.json';
import posts from './posts.json';
import archive from './archive.json';
import comments from './comments.json';

const app = express()

app.use(cors())
app.use(express.json())

const port = 4000

app.get('/posts', (_, response) => {
  return response.json(posts)
})

app.get('/posts/:id', (request, response) => {
  const selectedId = String(request.params.id)
  const post = archive.find(({ id }) => String(id) === selectedId)
  return response.json(post)
})

app.post('/posts/:id/comments', (request, response) => {
  const postId = Number(request.params.id)

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as const;

  comments.push({
    id: comments.length + 1,
    author: request.body.name,
    content: request.body.comment,
    post: postId,
    time: new Date().toLocaleString('en-US', options)
  });

  const commentsForPost = comments.filter(({ post }) => post === postId)
  return response.json(commentsForPost)
})

app.get('/categories', (_, response) => {
  return response.json(categories)
})

app.get('/categories/:id', (request, response) => {
  const { id } = request.params
  const byCategory = archive.filter(({ category }) => category === id)
  return response.json(byCategory)
})

app.get('/comments/:post', (request, response) => {
  const postId = Number(request.params.post)
  const commentsForPost = comments.filter(({ post }) => post === postId)
  return response.json(commentsForPost)
})

app.listen(port, () => {
  console.log(`DB is running on http://localhost:${port}!`)
})

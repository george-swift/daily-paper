import { FC, useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { submitComment } from "../../api/comments";
import { EntityId } from "../../shared/types";
import { UPDATE_COMMENTS } from "../../store/comments";
import { Form } from "./styles";

type CommentFormProps = {
  post: EntityId
}

export const CommentForm: FC<CommentFormProps> = ({ post }) => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')

  const setInput = (setter) => (event) => {
    setter(event.currentTarget.value)
  }

  const dispatch = useDispatch()

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const response = await submitComment({ post, name, comment })
    const comments = await response.json()
    setLoading(false)
    setName('')
    setComment('')

    if (response.status === 200) {
      dispatch({
        type: UPDATE_COMMENTS,
        comments,
      })
    }
  }

  return (
    <Form onSubmit={submit}>
      <h3>Add comment</h3>
      <input
        type="text"
        value={name}
        placeholder="Your name"
        onChange={setInput(setName)}
        minLength={2}
        required
      />
      <textarea
        value={comment}
        placeholder="Your comment"
        onChange={setInput(setComment)}
        required
      />
      {loading ? (
        <span>Submitting...</span>
       ) : (
        <button type="submit">Post</button>
       )}
    </Form>
  )
}
import { AddNewComment, Comment, EntityId } from "../shared/types";
import { config } from "./config";

export async function fetchComments(postId: EntityId) {
  const response = await fetch(`${config.baseUrl}/comments/${postId}`)
  return await response.json() as Comment[]
}

export async function submitComment({
  post: id,
  name,
  comment
}: AddNewComment): Promise<Response> {
  return await fetch(`${config.baseUrl}/posts/${id}/comments`, {
    method: 'POST',
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ name, comment })
  })
}
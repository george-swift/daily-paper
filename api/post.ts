import fetch from "node-fetch";
import { Post, EntityId } from "../shared/types";
import { config } from "./config";

export async function fetchPost(id: EntityId) {
  const response = await fetch(`${config.baseUrl}/posts/${id}`)
  return await response.json() as Post
}
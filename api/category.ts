import fetch from "node-fetch";
import { Post, EntityId } from "../shared/types";
import { config } from "./config";

export async function fetchByCategory(categoryId: EntityId) {
  const url = `${config.baseUrl}/categories/${categoryId}`
  const response = await fetch(url)
  return await response.json() as Post[]
}
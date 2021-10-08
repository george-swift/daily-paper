import fetch from "node-fetch";
import { Post, Category } from '../shared/types';
import { config } from "./config";

export async function fetchPosts() {
  const response = await fetch(`${config.baseUrl}/posts`)
  return await response.json() as Promise<Post[]>
}

export async function fetchCategories() {
  const response = await fetch(`${config.baseUrl}/categories`)
  return await response.json() as Promise<Category[]>
}


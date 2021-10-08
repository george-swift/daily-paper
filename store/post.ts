import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { Optional, Post } from "../shared/types";
import { HydrateAction } from "./hydrate";

export const UPDATE_POST = 'UPDATE_POST'

export interface UpdatePost extends AnyAction {
  type: typeof UPDATE_POST
  post: Post
}

export type PostState = Optional<Post>

type PostAction = HydrateAction | UpdatePost

export const post = (state: PostState = null, action: PostAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload?.post ?? null
    
      case UPDATE_POST:
        return action.post
  
    default:
      return state;
  }
}
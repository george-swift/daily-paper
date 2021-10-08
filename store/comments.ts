import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { Comment } from "../shared/types";
import { HydrateAction } from "./hydrate";

export const UPDATE_COMMENTS = 'UPDATE_COMMENTS'

export interface UpdateCommentsAction extends AnyAction {
  type: typeof UPDATE_COMMENTS
  comments: Comment[]
}

export type CommentsState = Comment[]

type CommentsAction = HydrateAction | UpdateCommentsAction

export const comments = (
  state: CommentsState = [],
  action: CommentsAction
) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload?.comments ?? []
    
    case UPDATE_COMMENTS:
      return action.comments
  
    default:
      return state;
  }
}
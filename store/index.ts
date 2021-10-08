import { createStore, combineReducers, Store } from "redux";
import { Context, createWrapper } from "next-redux-wrapper";
import { post, PostState } from "./post";
import { comments, CommentsState } from "./comments";

export type State = {
  post: PostState
  comments: CommentsState
}

const rootReducer = combineReducers({ post, comments })

const makeStore = (context: Context) => createStore(rootReducer)

export const store = createWrapper<Store<State>>(makeStore, { debug: true})
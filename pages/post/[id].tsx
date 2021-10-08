import { HYDRATE } from "next-redux-wrapper";
import { useSelector } from 'react-redux';
import { fetchPost } from "../../api/post";
import { Loader } from '../../components/Loader/Loader';
import { PostBody } from '../../components/Post/PostBody';
import { Comments } from '../../components/Comment/CommentSection';
import { fetchComments } from '../../api/comments';
import { State, store } from '../../store';

export const getServerSideProps = store
  .getServerSideProps((store) => async ({ params }) => {
    const { id } = params;

    if (typeof id !== 'string') {
      return { notFound: true };
    }

    const post = await fetchPost(id);
    const comments = await fetchComments(id);

    store.dispatch({
      type: HYDRATE,
      payload: { post, comments }
    });
});

export default function PostPage() {
  const { post, comments } = useSelector<State, State>(state => state);

  return (
    <>
      {post ? (
        <>
          <PostBody post={post} />
          <Comments post={post.id} comments={comments} />
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}
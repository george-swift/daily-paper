import { Comment as CommentType, EntityId } from "../../shared/types";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";
import { CommentSection, ListGroup, Item } from "./styles";

type CommentsProps = {
  post: EntityId
  comments: CommentType[]
}

export const Comments = ({ post, comments }: CommentsProps) => (
  <CommentSection>
    <h3>Comments</h3>
    <ListGroup>
      {comments.map((comment) => (
        <Item key={comment.id}>
          <Comment comment={comment} />
        </Item>
      ))}
    </ListGroup>
    <CommentForm post={post} />
  </CommentSection>
)
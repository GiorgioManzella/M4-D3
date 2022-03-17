import { ListGroup } from "react-bootstrap";

const CommentList = ({ commentsToShow }) => (
  <ListGroup>
    {commentsToShow.map((comment) => (
      <ListGroup.Item key={comment._id}>{comment.comment}</ListGroup.Item>
    ))}
  </ListGroup>
);

export default CommentList;

import { Button, ListGroup } from "react-bootstrap";

const deleteComment = async (asin) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + asin,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjMzZTRlYTdiMTAwMTVkMDY3YjEiLCJpYXQiOjE2NDc1MjU5NjcsImV4cCI6MTY0ODczNTU2N30.To4zeY-TI4hsyW_EX22xz7C6-zKbuG-_2vJ-I4c5aAk",
        },
      }
    );
    if (response.ok) {
      alert("Comment deleted");
    } else {
      alert("something went wrong with delete");
    }
  } catch (error) {
    alert("something went wrong with delete");
  }
};
const SingleComment = (comment) => (
  <ListGroup.Item>
    {comment.comment}

    <Button
      variant="danger"
      className="m-2"
      onClick={() => deleteComment(comment._id)}
    >
      D
    </Button>
  </ListGroup.Item>
);

export default SingleComment;

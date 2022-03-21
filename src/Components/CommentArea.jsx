import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjMzZTRlYTdiMTAwMTVkMDY3YjEiLCJpYXQiOjE2NDc1MjU5NjcsImV4cCI6MTY0ODczNTU2N30.To4zeY-TI4hsyW_EX22xz7C6-zKbuG-_2vJ-I4c5aAk",
          },
        }
      );
      console.log(response);
      let comments = await response.json();
      this.setState({ comments });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    );
  }
}
export default CommentArea;

import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";

class AddComment extends React.Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };

  sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjMzZTRlYTdiMTAwMTVkMDY3YjEiLCJpYXQiOjE2NDc1MjU5NjcsImV4cCI6MTY0ODczNTU2N30.To4zeY-TI4hsyW_EX22xz7C6-zKbuG-_2vJ-I4c5aAk",
          },
        }
      );
      if (response.ok) {
        alert("comment POsted");
      } else {
        alert("something went wrong");
      }
    } catch (error) {}
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.sendComment}>
          <Form.Group>
            <Form.Label>Comment Text</Form.Label>
            <Form.Control
              type="text"
              placeholder="add comment here"
              value={this.state.comment.comment}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    comment: e.target.value,
                  },
                })
              }
            ></Form.Control>
          </Form.Group>
          <FormGroup>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comment.rate}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    rate: e.target.value,
                  },
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </FormGroup>
        </Form>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    );
  }
}

export default AddComment;

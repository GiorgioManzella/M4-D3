import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{
            border: this.state.selected ? "3px solid red" : "none",
            height: "500px",
            width: "auto",
            margin: "6rem",
          }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea asin={this.props.book.asin} />}
      </>
    );
  }
}

export default SingleBook;

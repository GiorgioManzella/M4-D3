import SingleBook from "./SingleBook";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

class BookList extends React.Component {
  state = {
    SearchQuery: "",
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group constolId="formBasciEmail">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search Here"
                value={this.state.SearchQuery}
                onChange={(e) => this.setState({ SearchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.Books.filter((b) =>
            b.title.toLowerCase().includes(this.state.SearchQuery)
          ).map((b) => (
            <Col sx={3}>
              <SingleBook book={b} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default BookList;

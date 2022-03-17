import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { Badge } from "react-bootstrap";

class MyBadge extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.text} <Badge variant={this.props.color}>New</Badge>
        </h1>
      </div>
    );
  }
}

export default MyBadge;

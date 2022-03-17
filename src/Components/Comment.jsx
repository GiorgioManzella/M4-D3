import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";

class GetComments extends Component {
  componentDidMount = () => {
    this.fetchComments();
  };
  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjMzZTRlYTdiMTAwMTVkMDY3YjEiLCJpYXQiOjE2NDc1MjU5NjcsImV4cCI6MTY0ODczNTU2N30.To4zeY-TI4hsyW_EX22xz7C6-zKbuG-_2vJ-I4c5aAk",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
      } else {
        console.log("error1");
      }
    } catch (error) {
      console.log("error2", error);
    }
  };

  render() {
    return (
      <div className="text-dark">
        <h4> </h4>
        <h6>{}</h6>
      </div>
    );
  }
}

export default GetComments;

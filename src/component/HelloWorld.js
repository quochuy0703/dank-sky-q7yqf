import React from "react";
import axios from "axios";
import { store } from "../redux/store";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  handleClick = () => {
    let message = {};
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        message = response.data;
        console.log(response.data);
        this.setState({
          content: message.message
        });
        store.dispatch({
          type: "MESSAGE",
          content: this.state.content
        });
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div className="HelloWorld">
        <p>{this.props.message}</p>
        <button onClick={this.handleClick} type="button">
          Send
        </button>
      </div>
    );
  }
}

export default HelloWorld;

import React from "react";
import "./styles.css";
import ButtonGroup from "./component/ButtonGroup";
import Message from "./component/Message";

import HelloWorld from "./component/HelloWorld";

import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Message message={this.props.tech} />
        <ButtonGroup techs={["react", "react-redux", "component"]} />
        <HelloWorld message={this.props.content} />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    tech: state.button.tech,
    content: state.button.content
  };
};

export default connect(
  mapStatetoProps,
  null
)(App);

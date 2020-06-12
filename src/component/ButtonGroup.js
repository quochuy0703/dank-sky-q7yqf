import React from "react";
import { connect } from "react-redux";

class ButtonGroup extends React.Component {
  handleClick = e => {
    this.props.SendMessage(e.target.dataset.tech);
  };
  render() {
    return (
      <div>
        {this.props.techs.map((tech, i) => {
          return (
            <button
              data-tech={tech}
              key={i}
              type="button"
              onClick={this.handleClick}
            >
              {tech}
            </button>
          );
        })}
      </div>
    );
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    SendMessage: ed =>
      dispatch({
        type: "CHANGE_MESSAGE",
        tech: ed
      })
  };
};
export default connect(
  null,
  mapDispatchtoProps
)(ButtonGroup);

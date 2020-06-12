const init = {
  tech: "React",
  content: "hello"
};

export default (state = init, action) => {
  switch (action.type) {
    case "CHANGE_MESSAGE": {
      let newState = JSON.parse(JSON.stringify(state));
      newState.tech = action.tech;
      return { ...state, ...newState };
    }
    case "MESSAGE": {
      let newState = JSON.parse(JSON.stringify(state));
      newState.content = action.content;
      return { ...state, ...newState };
    }
    default:
      return state;
  }
};

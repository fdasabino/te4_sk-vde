export const ACTIONS = {
  PLUS: "PLUS",
  MINUS: "MINUS",
};

export const countReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.PLUS:
      return state + 1;
    case ACTIONS.MINUS:
      return state - 1;
    default:
      return state;
  }
};

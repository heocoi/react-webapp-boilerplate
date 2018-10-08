// Actions
const ADD_TODO = "@@react-webapp-boilerplate/ADD_TODO";

// Reducer
const initialState = [];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    default:
      return state;
  }
}

// Action Creators
export const onAddTodo = todo => ({
  type: ADD_TODO,
  todo
});

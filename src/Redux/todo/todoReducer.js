const INITIAL_STATE = {
  todos: [],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "FETCH_TASK":
      return {
        ...state,
        todos: action.payload,
      };

    case "UPDATE_TASK":
      return {
        ...state,
        todos: [...state.todos].map((todo) => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title;
          }
        }),
      };

    case "DELETE_TASK":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;

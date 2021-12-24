const initialState = {
  data: [],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [...state.data, action.message],
      };
    case "DELETE_TODO":
      return {
        ...state,
        data: [...state.data.filter((todo) => todo.id !== action.id)],
      };
    case "UPDATE_TODO":
      return {
        ...state,
        data: [
          ...state.data.filter((todo) => todo.id !== action.id),
          { message: action.message, id: action.id },
        ],
      };
    default:
      return state;
  }
};

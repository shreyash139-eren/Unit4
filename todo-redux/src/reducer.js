const initialState = {
  todo: [],
  form: { title: "", status: false, id: "" },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      const newTodo = {
        ...action.payload,
        id: Date.now(),
      };
      return {
        ...state,
        todo: [...state.todo, newTodo],
        form: { title: "", status: false, id: "" },
      };

    case "DELETE":
      return {
        ...state,
        todo: state.todo.filter((ele) => ele.id !== action.payload.id),
      };

    case "UPDATE_FORM":
      return {
        ...state,
        form: {
          ...state.form,
          ...action.payload,
        },
      };

    default:
      return state;
  }
}

export default reducer;

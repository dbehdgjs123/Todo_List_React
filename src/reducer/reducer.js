export function reducer(state, action) {
  const { AddTodo, NowTodo } = state;
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        AddTodo: action.AddTodo,
      };

    case "CREATE_USER":
      console.log("호출");
      return {
        AddTodo: "",
        NowTodo: NowTodo.concat({ todo: AddTodo, Id: action.nextId }),
      };

    case "EDIT_USER":
      return {
        ...state,
        NowTodo: NowTodo.map((item) =>
          item.Id === action.dataId
            ? { todo: action.data, Id: action.dataId }
            : item
        ),
      };

    case "DELETE_USER":
      return {
        ...state,
        NowTodo: NowTodo.filter((item) => item.Id !== action.dataId),
      };

    default:
      return state;
  }
}

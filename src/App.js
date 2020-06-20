import React from "react";
import List from "./components/List";
import "./App.css";
import { useReducer } from "react";
import { useEffect } from "react";

let id = 0;
function reducer(state, action) {
  const { AddTodo, NowTodo } = state;
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        AddTodo: action.AddTodo,
      };

    case "CREATE_USER":
      if (AddTodo !== "") {
        return {
          AddTodo: initialState.AddTodo,
          NowTodo: NowTodo.concat({ todo: AddTodo, Id: action.nextId }),
        };
      }
      return {
        ...state,
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

const initialState = {
  AddTodo: "",
  NowTodo: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { AddTodo, NowTodo } = state;

  const onInputHandler = (e) => {
    dispatch({
      type: "INPUT_CHANGE",
      AddTodo: e.target.value,
    });
  };

  const onsubmitHandler = () => {
    dispatch({
      type: "CREATE_USER",
      nextId: id++,
    });
  };
  const onEdit = (data, dataId) => {
    dispatch({
      type: "EDIT_USER",
      data: data,
      dataId: dataId,
    });
  };
  const onDelete = (dataId) => {
    dispatch({
      type: "DELETE_USER",
      dataId: dataId,
    });
  };

  return (
    <div className="page">
      <div className="input_box">
        <input
          className="input_bar"
          type="text"
          value={AddTodo}
          onChange={onInputHandler}
        />
        <button type="button" className="input_btn" onClick={onsubmitHandler}>
          추가
        </button>
      </div>
      <List data={NowTodo} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default App;

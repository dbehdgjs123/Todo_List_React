import React from "react";
import List from "./components/List";
import "./App.css";
import { useReducer, createContext } from "react";
import { reducer } from "./reducer/reducer";

let id = 0;

const initialState = {
  AddTodo: "",
  NowTodo: [],
};

export const UserDispath = createContext(null);

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
    if (AddTodo !== "") {
      dispatch({
        type: "CREATE_USER",
        nextId: id++,
      });
    } else {
      console.log("값을 입력하세요");
    }
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
      <UserDispath.Provider value={dispatch}>
        <List data={NowTodo} />
      </UserDispath.Provider>
    </div>
  );
}

export default App;

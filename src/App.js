import React from "react";
import List from "./components/List";
import "./App.css";
import { useState } from "react";

let id = 0;
function App() {
  const [InputTodo, setInputTodo] = useState({
    AddTodo: "",
    NowTodo: [],
  });

  const { AddTodo, NowTodo } = InputTodo;

  const onInputHandler = (e) => {
    setInputTodo({
      ...InputTodo,
      AddTodo: e.target.value,
    });
  };

  const onsubmitHandler = () => {
    if (AddTodo !== "") {
      setInputTodo({
        NowTodo: NowTodo.concat({ todo: AddTodo, Id: id++ }),
        AddTodo: "",
      });
    } else {
      console.log("값이 비었습니다");
    }
  };
  const onEdit = (data, dataId) => {
    setInputTodo({
      ...InputTodo,
      NowTodo: NowTodo.map((item) => {
        if (item.Id == dataId) {
          item.todo = data;
          console.log(item.todo);
          return item;
        }
        return item;
      }),
    });
  };
  const onDelete = (dataId) => {
    setInputTodo({
      ...InputTodo,
      NowTodo: NowTodo.filter((item) => item.Id !== dataId),
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

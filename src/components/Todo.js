import React from "react";
import { useState, useContext } from "react";
import "../todo.css";
import { UserDispath } from "../App";

function Todo({ data, id }) {
  const [Todo, setTodo] = useState({
    todoText: "",
    isEdit: false,
  });
  const dispath = useContext(UserDispath); //app.js에서 만든 context 사용
  const { todoText, isEdit } = Todo;
  const onDelete = () => {
    dispath({
      type: "DELETE_USER",
      dataId: id,
    });
  };
  const EditHandler = () => {
    if (isEdit) {
      setTodo({
        todoText: todoText,
        isEdit: !isEdit,
      });
      dispath({
        type: "EDIT_USER",
        data: todoText,
        dataId: id,
      });
    } else {
      setTodo({
        todoText: data,
        isEdit: !isEdit,
      });
    }
  };

  const onChangeHandler = (e) => {
    setTodo({
      ...Todo,
      todoText: e.target.value,
    });
    console.log(todoText);
  };
  return (
    <div className="todo_item">
      {isEdit ? (
        <>
          <input type="text" value={todoText} onChange={onChangeHandler} />
          <button onClick={EditHandler}>완료</button>
        </>
      ) : (
        <>
          <h3>{data}</h3>
          <button onClick={EditHandler}>수정</button>
        </>
      )}
      <button onClick={onDelete}>삭제</button>
    </div>
  );
}

export default Todo;

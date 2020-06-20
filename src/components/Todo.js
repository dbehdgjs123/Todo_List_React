import React from "react";
import { useState } from "react";
import "../todo.css";

function Todo(props) {
  const [Todo, setTodo] = useState({
    todoText: "",
    isEdit: false,
  });
  const { todoText, isEdit } = Todo;
  const { onEdit } = props;
  const onDelete = () => {
    props.onDelete(props.id);
  };
  const EditHandler = () => {
    if (isEdit) {
      setTodo({
        todoText: todoText,
        isEdit: !isEdit,
      });
      onEdit(todoText, props.id);
    } else {
      setTodo({
        todoText: props.data,
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
          <h3>{props.data}</h3>
          <button onClick={EditHandler}>수정</button>
        </>
      )}
      <button onClick={onDelete}>삭제</button>
    </div>
  );
}

export default Todo;

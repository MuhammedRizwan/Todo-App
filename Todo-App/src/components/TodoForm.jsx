import React, { useState } from "react";
import swal from "sweetalert2"

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const regex= /^[a-zA-Z0-9]{5,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value||value.trim().length == 0) {
        swal.fire({
            icon: 'info',
            html: '<strong>Please fill someThing!</strong>', 
            width: 300, 
            padding: '1em',
            background: '#fff', 
            color: '#000', 
            showConfirmButton: false, 
            timer:2000,
          })
      return;
    }
    if(!regex.test(value)){
        swal.fire({
            icon: 'info',
            html: '<strong>Atleast 5 characters!</strong>', 
            width: 300, 
            padding: '1em',
            background: '#fff',
            color: '#000', 
            showConfirmButton: false,
            timer:2000,
          })
      return;
    }
    addTodo(value);
    setValue("");
  };
  return (
    <form action="" className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="todo-input"
        onChange={(e) => {setValue(e.target.value)}}
        placeholder="what is the task today?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;

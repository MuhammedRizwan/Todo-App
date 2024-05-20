import React, { useState } from "react";
import swal from "sweetalert2"

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value||value.trim().length == 0) {
        swal.fire({
            icon: 'info',
            html: '<strong>cannot update without data!</strong>', 
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
    editTodo(value, task.id)
  };
  return (
    <form action="" className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="todo-input"
        onChange={(e) => setValue(e.target.value)}
        placeholder="update task"
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;

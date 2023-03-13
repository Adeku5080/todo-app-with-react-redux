import axios from "axios";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { updateTasks } from "../Redux/todo/action";
import { useDispatch } from "react-redux";

import styled from "styled-components";


const UpdateForm = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  let params  = useParams();

  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleUpdate = async (id) => {

    const response = await axios.patch(`http://localhost:4000/tasks/${id}`, {
      title: task,
    });
    dispatch(updateTasks(task))
    history.push("/")
    window.location.reload()
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  return (
    <Container>
      
      <label>Edit a Task</label>
      <form onSubmit={handleSubmit}>
        <input
          name="task"
          placeholder="Add a task"
          type="task"
          value={task}
          onChange={handleChange}
        />
        <button onClick={()=>handleUpdate(params.id)}>Update task</button>
      </form>
    </Container>
  );
};

const Container = styled.div`

label{
  margin-top:50px;
  // border:1px solid red;
  text-transform:uppercase;
}
form{

  input{
    height:26px;
    width:30vw;
    margin-right:4px;
    margin-top:5px;
    border-radius:6px;
  }

  button{
    border:1px solid black;
    background:green
    color:white;
    padding:6px;
    border-radius:6px;
  }
}

`;

export default UpdateForm;

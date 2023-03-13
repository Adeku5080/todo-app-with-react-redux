import React from "react";
import AddForm from "./components/AddForm";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import UpdateForm from "./components/UpdateForm";
import { fetchTasks } from "./Redux/todo/action";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://localhost:4000/tasks");
      dispatch(fetchTasks(data));
    }
    fetchData();
  }, []);

 
  return (
    <Container>
      <Switch>
        <Route exact path="/">
          {" "}
          <AddForm todos={todos}/>
        </Route>
        <Route  path="/update/:id">
          <UpdateForm />
        </Route>
      </Switch>

     
    </Container>
  );
};

const Container = styled.div``;


export default App;

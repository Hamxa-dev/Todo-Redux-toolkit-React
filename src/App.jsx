import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// App.jsx
import { addTodo } from "./config/reduxToolkit-config/reducer/todoslice";

const App = () => {
  const Todoref = useRef();
  const [loading, setLoading] = useState(false);
  const editingIndex = null;

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.todos);
  console.log(selector);



  const SubmitTodo = (event) => {
    event.preventDefault();
    dispatch(addTodo({
      title: Todoref.current.value,
    }));
    Todoref.current.value = "";
  };

  // const DeleteTodos = (index) => {
  //   dispatch(deleteTodo(index));
  // };

  return (
    <>
      <form
        onSubmit={SubmitTodo}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" style={{ marginBottom: "30px" }}>
          TODO APP
        </Typography>
        <TextField
          ref={Todoref}
          variant="filled"
          placeholder="Enter todo"
          required
          style={{
            width: "300px",
            border: "2px solid #284cff ",
            borderRadius: "9px",
            backgroundColor: "ButtonHighlight",
            marginBottom: "2px",
            display: "flex",
            flexDirection: "column",
            textAlignLast: "center",
          }}
        />
        <Button
          type="submit"
          style={{ paddingLeft: "110px", paddingRight: "110px" }}
          variant="contained"
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={20} sx={{ color: "white" }} />
          ) : editingIndex !== null ? (
            "Edit Todo"
          ) : (
            "Add Todo"
          )}
        </Button>
      </form>
      <ul>
        {selector.map((item, index) => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;

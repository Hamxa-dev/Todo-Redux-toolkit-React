import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, updateTodo } from './config/reduxToolkit-config/reducer/todoslice';


import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const App = () => {
  const todoRef = useRef();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.todos);

  const addTodoReducer = (event) => {
    event.preventDefault();
    dispatch(addTodo({
      title: todoRef.current.value,
    }));
    todoRef.current.value = '';
  };

  const deleteTodo = (index) => {
    dispatch(removeTodo({
      index: index,
    }));
  };

  function UpdateTodo(index, item) {
    const updatedTitle = prompt("Edit Todo", item);
    if (updatedTitle !== null) {
        dispatch(updateTodo({ index, title: updatedTitle }));
    }
}


  return (
    <>
      <Typography variant="h2" style={{fontFamily:"inherit", textAlign:'center',marginBottom:"15px" }} >T0doApp</Typography>
      <form onSubmit={addTodoReducer} style={{ marginBottom: '20px' }}>
        <TextField
          type="text"
          placeholder="Add a new todo"
          inputRef={todoRef}
          variant="outlined"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Add Todo
        </Button>
      </form>

      <List>
        {selector.map((item, index) => (
          <ListItem key={item.id}>
            <ListItemButton>
              <ListItemText primary={item.title} />
              <Button
                variant="contained"
                color="error"
                onClick={() => deleteTodo(index)}
                style={{ marginLeft: '5px' ,width:"1px",height:"25px" }}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => UpdateTodo(index, item.title)}

                style={{ marginLeft: '5px' ,width:"1px",height:"25px" }}
              >
                Edit
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default App;

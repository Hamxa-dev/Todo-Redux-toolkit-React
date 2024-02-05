import { createSlice, nanoid } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'Todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                title: action.payload.title,
                id: nanoid(),
            });
        },
        removeTodo: (state, action) => {
            state.todos.splice(action.payload.index, 1);
        },
        updateTodo: (state, action) => {
            const { index, title } = action.payload;
            state.todos[index].title = title;
        },
    },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;


//(1)useSelector
//is se value get ker te hain!

//(2)useDispatch
// is se vule bijwate hain!
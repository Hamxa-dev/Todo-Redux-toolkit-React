import { createSlice, nanoid } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
    name: 'Todos',
    initialState: {
        todos: [{
            title: 'Hello world',
            id: 1
        }]
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                title: action.payload.title,
                id: nanoid()
            })
        },
        // deleteTodo: (state, action) => {
        //     state.todos.splice(action.payload.index, 1);
        // }
    }
})


export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;




//(1)useSelector
//is se value get ker te hain!

//(2)useDispatch
// is se vule bijwate hain!
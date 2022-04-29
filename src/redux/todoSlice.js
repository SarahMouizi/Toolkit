import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todos',
    
    initialState: [
        { id: 1, title: 'Wake up', completed: false, edit : '' },
        { id: 2, title: 'Make coffee', completed: false },
        { id: 3, title: 'yoga time', completed: false },
        { id: 4, title: 'shopping time', completed: false },
        { id: 5, title: 'live your life', completed: false },
    ],

    
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: new Date(),
                title: action.payload.title,
                completed: false,
                edit: '',
            };

            state.push(todo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },

        editTodo:(state, action)=>{
            const index = state.findIndex((todo)=> todo.id=== action.payload.id)
               state[index].title = prompt('test');
        }

    },
});


export const { addTodo, toggleComplete, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
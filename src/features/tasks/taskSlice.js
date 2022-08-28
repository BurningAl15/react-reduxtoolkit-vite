import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {
        id:"1",
        title:"Task 1",
        description: "Task 1 description",
        completed: false
    },
    {
        id:"2",
        title:"Task 2",
        description: "Task 2 description",
        completed: false
    }
]

export const taskSlice = createSlice({
    name:'tasks',
    initialState: initialState,
    reducers:{
        addTask: (state, action) => {
            const payload = {
                ...action.payload,
                completed:false
            }
            state.push(payload);
        },
        removeTask: (state,action) => {
            const taskFound = state.find(task => task.id === action.payload.id);
            if(taskFound){
                state.splice(state.indexOf(taskFound),1)
            }
        },
        completeTask: (state,action) => {
            const { id} = action.payload;
            const foundTask = state.find((task) => task.id === id);

            if (foundTask) {
                foundTask.completed = !foundTask.completed;
            }
        },
        editTask: (state,action) => {
            const { id, title, description } = action.payload;
            const foundTask = state.find((task) => task.id === id);
            if (foundTask) {
                foundTask.title = title;
                foundTask.description = description;
            }
        },
    }
})

export const {addTask,removeTask,completeTask,editTask} = taskSlice.actions;

export default taskSlice.reducer;
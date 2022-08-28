import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/tasks/taskSlice';

export const store = configureStore({
    //Is like a set state.
    reducer: {
        tasks: taskReducer
    },
})
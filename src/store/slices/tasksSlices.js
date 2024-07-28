import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const defaultTasks = [
    {
        id: uuidv4(),
        completed: false,
        title: `task1`,
        description: `description 1`,
        createdAt: new Date().getTime(),
    },
    {
        id: uuidv4(),
        completed: true,
        title: `task2`,
        description: `description 2`,
        createdAt: new Date().getTime(),
    },
    {
        id: uuidv4(),
        completed: false,
        title: `task2`,
        description: undefined,
        createdAt: new Date().getTime(),
    },
];

const initialState = { tasks: defaultTasks };
const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                ...action.payload,
                id: uuidv4(),
                completed: false,
                createdAt: new Date().getTime(),
            });
        },
        deleteTask: (state, action) => {
            console.log(action);
            state.tasks = state.tasks.filter((task) => {
                return task.id !== action.payload;
            });
        },
        toggleTask: (state, action) => {
            state.tasks = state.tasks.map((task) => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        completed: !task.completed,
                    };
                }
                return task;
            });
        },
        updateTaskDescription: (state, action) => {
            state.tasks = state.tasks.map((task) => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        description: action.payload.description,
                    };
                }
                return task;
            });
        },
    },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice.reducer;

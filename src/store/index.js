import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slices/tasksSlices";

const LOCAL_STORAGE_KEY = "reduxState";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(LOCAL_STORAGE_KEY, serializedState);
    } catch (err) {
        console.error(err);
    }
};

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    preloadedState: loadState(),
});

store.subscribe(() => {
    saveState(store.getState());
});

export default store;

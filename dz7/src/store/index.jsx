import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './counterSlice.jsx'
import todosReducer from './todosSlice.jsx'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todosReducer
    }
})

export default store
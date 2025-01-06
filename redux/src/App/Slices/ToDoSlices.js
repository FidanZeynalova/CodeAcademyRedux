
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toDo: [
        {
            id: 1,
            todo: "salam",
            isComplete: false
        }
    ]
}


export const ToDoSlice = createSlice({
    name: "toDo",
    initialState,
    reducers: {
        addToDo: (state, action) => {
            let newTodo = {
                id: state.toDo.length++,
                todo: action.payload,
                isComplete: false
            }

                state.toDo.push(newTodo)
        }
    }
})

export const { addToDo } = ToDoSlice.actions
export default ToDoSlice.reducer
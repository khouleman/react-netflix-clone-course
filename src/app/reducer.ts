import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'



interface CounterState {
    value: number, 
    test: number,  
}

const initialState: CounterState = {
    value: 0,
    test : 5, 
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setFilm: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        increment: (state) => {
            state.value += 1
        },
 

    },
})

export const { setFilm, increment } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer; 
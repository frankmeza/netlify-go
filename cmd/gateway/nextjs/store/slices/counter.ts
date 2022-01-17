import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const COUNTER = "counter";
const COUNTER_SAGA_INCREMENT_BY_NUMBER = "counter/saga/increment_by_number";

// actions that call saga fns
export const incrementByNumber = createAction<number>(
    COUNTER_SAGA_INCREMENT_BY_NUMBER,
);

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes
export const counterSlice = createSlice({
    name: COUNTER,
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

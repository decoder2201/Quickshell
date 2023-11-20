import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    dataSelected: [],
    user: null, // You can set the initial value to null or an appropriate default value
    tickets: [],
    users: [],
    message: null, // You can set the initial value to null or an appropriate default value
};

export const Reducer = createReducer(initialState, {
    dataRequest: (state) => {
        state.loading = true;
    },
    dataSuccess: (state, action) => {
        state.loading = false;
        state.tickets = action.payload.tickets;
        state.users = action.payload.users;
    },
    dataFailure: (state) => {
        state.loading = false;
        state.tickets = [];
        state.users = [];
    },
    dataSelectRequest: (state) => {
        state.loading = true;
        state.dataSelected = [];
        state.user = null; 
        state.message = null;
    },
    dataSelectSuccess: (state, action) => {
        state.loading = false;
        state.dataSelected = action.payload.dataSelected;
        state.user = action.payload.user;
        state.message = null;
    },
    dataSelectFailure: (state, action) => {
        state.loading = false;
        state.dataSelected = [];
        state.user = null;
        state.message = action.payload.message;
    },
});

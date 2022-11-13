import {createSlice} from '@reduxjs/toolkit';

import {init} from '../config';

const initialState = {
    criteria: init.criteria,
    userGrades: init.userGrades,
    experts: init.experts
}

const textSlice = createSlice({
    name: 'textSlice',
    initialState,
    reducers: {
        changeCriteria1: (state, action) => {
            const item = state.criteria.find(item => item.id === action.payload.id);

            const index = action.payload.name.split('.')[2];
            item.values[index] = action.payload.value;
        },
        changeCriteria2: (state, action) => {
            const item = state.criteria.find(item => item.id === action.payload.id);

            const index = action.payload.name.split('.')[2];
            item.grades[index] = action.payload.value;
        },
        changeAverage1: (state, action) => {
            const item = state.criteria.find(item => item.id === action.payload.id);

            item.average1 = action.payload.average;
        },
        changeAverage2: (state, action) => {
            const item = state.criteria.find(item => item.id === action.payload.id);

            item.average2 = action.payload.average;
        },
        changeUserGrades: (state, action) => {
            const item = state.userGrades.find(item => item.id === action.payload.id);

            item.grades = action.payload.mas;

            let sum = 0;

            for (const ma of action.payload.mas) {
                sum += ma;
            }

            item.average = sum / 20;

        }
    }
})

const textReducer = textSlice.reducer;

const {changeCriteria1, changeCriteria2, changeAverage1, changeAverage2, changeUserGrades} = textSlice.actions;

export const todoActions = {changeCriteria1, changeCriteria2, changeAverage1, changeAverage2, changeUserGrades};

export default textReducer;
import {combanineReducers} from 'redux'

import {ADD_COMMENT, SET_COMMENTS, SET_COMPANIES_LIST} from "./actions";


function companies(state = [], action) {
    switch (action.type) {
        case SET_COMPANIES_LIST:
            return action.data;
        default:
            return state;
    }
}

function comments(state, action) {
    switch (action.type) {
        case SET_COMMENTS:
            return action.data;
        case ADD_COMMENT:
            return [...state, action.data];
        default:
            return state
    }
}


const application = combanineReducers({
    companies,
    comments
});

export default application;
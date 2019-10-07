import {createStore} from 'redux';
import application from "./reducers";

const store = createStore(application);

export default store;
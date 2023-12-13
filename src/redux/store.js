// import { createStore } from "redux";
// import counterReducer from "./counter/counterReducer";
import { createStore } from 'redux';
import { countReducer } from './counter/counterReducer';



const store = createStore(countReducer);
export default store;
// import { DECREMENT, INCREMENET } from "./actionTypes";
import { DECREMENT, INCREMENET } from './actionTypes';
import counterReducer from './counterReducer';

// const initialState = {
//     value: 0,
// };

// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case INCREMENET:
//             return {
//                 ...state,
//                 value: state.value + 1,
//             };

//         case DECREMENT:
//             return {
//                 ...state,
//                 value: state.value - 1,
//             };

//         default:
//             return state;
//     }
// };

// export default counterReducer;

const initialState = {
    value: 0,
};

export const countReducer =(state=initialState, action) => {
    switch(action.type){
        case INCREMENET:
            return{
                ...state,
                value: state.value + 1,
            };
        case DECREMENT:
            return{
                ...state,
                value: state.value - 1,
            };
        default:
            return state;
    }
}
// const counterReducer = (state = 0, action) => {
//     switch(action.type){
//         case "INC":
//             return state + 1;
//         case "DEC":
//             return state - 1;
//         default: 
//             return state;
//     }
// }
// export default counterReducer;



// const counterReducer = (state = 0, action) => {
//     const val = 3;
//     switch(action.type){
//         case "INC":
//             return state + val;
//         case "DEC":
//             return state - val;
//         default: 
//             return state;
//     }
// }
// export default counterReducer;

let value = window.prompt ("Enter value");
const counterReducer = (state = parseInt(value), action) => {
    switch(action.type){
        case "INC":
            return state + parseInt(value);
        case "DEC":
            return state - parseInt(value);
        default: 
            return state;
    }
}
export default counterReducer;
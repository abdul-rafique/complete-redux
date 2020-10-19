const redux = require('redux');
const createStore = redux.createStore;

// Constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Actions
function increment() {
    return {
        type: INCREMENT
    }
}

function decrement() {
    return {
        type: DECREMENT
    }
}

// Initial State
const initialState = {
    count: 0
}

// Reducer

function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        
            case DECREMENT:
                return {
                    ...state,
                    count: state.count - 1
                }
    
        default:
            return state;
    }
}

// Create Store
const store = createStore(reducer);
console.log('Initial State: ', store.getState());
const unsubscribe = store.subscribe(()=> console.log("Updated State: ", store.getState()));

store.dispatch(increment());
store.dispatch(decrement());

unsubscribe();
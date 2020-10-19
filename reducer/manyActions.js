const redux = require('redux');
const createStore = redux.createStore;

// Constants
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// Action Creators
function buyCake() {
    return {
        type: BUY_CAKE
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

// Initial State
const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}

// Reducer

function reducer(state = initialState, action) {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            };

        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
    
        default:
           return state;
    }
}

const store = createStore(reducer);
console.log('Initial State: ', store.getState());
const unsubscribe = store.subscribe(()=> console.log('Updated State: ', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
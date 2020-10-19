const redux = require("redux");

const combineReducers = redux.combineReducers;
const createStore = redux.createStore;

// constants
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Actions
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

// Initial States

const cakesInitialState = {
    numOfCakes: 10
}

const iceCreamInitialState = {
    numOfIceCreams: 20
}

// Reducers

function cakeReducer(state = cakesInitialState, action) {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
    
        default:
            return state;
    }
}

function iceCreamReducer(state = iceCreamInitialState, action){
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
    
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer)
console.log('Initial State: ', store.getState());
const unsubscribe = store.subscribe(()=> console.log('Updated State: ', store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());


unsubscribe();
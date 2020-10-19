const redux = require('redux')
const createStore = redux.createStore;

// Constants
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

let nextToDoId = 1;

// Action Creators
function addToDo(body){
    return {
        type: ADD_TODO,
        payload: {
            id: nextToDoId++,
            body: body
        }
    }
}

function removeToDo(id){
    return {
        type: DELETE_TODO,
        payload: {
            id
        }
    }
}

// Reducer
function reducer(state = [], action){
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    body: action.payload.body
                }
            ]

        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload.id)
    
        default:
            return state;
    }
}

const store = createStore(reducer);
console.log("Initial Todo List: ", store.getState());

const unsubscribe = store.subscribe(()=> console.log('Updated Todo List: ', store.getState()));

store.dispatch(addToDo("Todo 1"))
store.dispatch(addToDo("Todo 2"))
store.dispatch(addToDo("Todo 3"))
store.dispatch(addToDo("Todo 4"))
store.dispatch(removeToDo(1))
store.dispatch(removeToDo(3))


unsubscribe();
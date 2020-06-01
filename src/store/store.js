import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer'
import thunk from 'redux-thunk'

import { BooksFetch } from './actions/BookActions'
import { WebSocketMiddleware } from './middleware/WebSocketMiddleware';

export function configureStore () {
    let middlewares = [
        thunk,
        WebSocketMiddleware()
    ]

    let store = createStore(rootReducer, applyMiddleware(...middlewares))

    store.dispatch(BooksFetch()).then(() => console.log("Books received"))

    return store
}

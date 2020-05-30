import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer'
import thunkMiddleware from 'redux-thunk'

import { BooksFetch } from './actions/BookActions'

export function configureStore () {
    let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

    store.dispatch(BooksFetch()).then(() => console.log("Books received"))

    return store
}

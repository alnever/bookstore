import { createReducer } from './../helpers/CreateReducer'

import { BOOKS_INDEX, BOOKS_REQUEST, BOOKS_RECEIVED } from './../actions/BookActions'

const booksInitialState = {
    isFetching: false,
    books: []
}


export const bookReducer = createReducer(booksInitialState,{
    [BOOKS_INDEX]: (state, action) => {
        return state
    },
    [BOOKS_REQUEST]: (state, action) => {
        return Object.assign({}, state, {
            isFetching: true
        })
    },
    [BOOKS_RECEIVED]: (state, action) => {
        return Object.assign({}, state, {
            isFetching: false,
            books: action.books
        })
    }
})
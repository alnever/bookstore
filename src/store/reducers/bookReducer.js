import { createReducer } from './../helpers/CreateReducer'

import { BOOKS_INDEX, BOOKS_REQUEST, BOOKS_RECEIVED, BOOK_EDIT_TOGGLE, BOOK_EDIT } from './../actions/BookActions'
import { initialBook } from '../models/Book'

const booksInitialState = {
    isEditing: false,
    isNew: false,
    isFetching: false,
    books: [],
    currentBook: initialBook
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
    },
    [BOOK_EDIT_TOGGLE]: (state, action) => {
        return {
            ...state,
            isEditing: action.isEditing,
            isNew: action.isNew,
            currentBook: action.currentBook
        }
    },
    [BOOK_EDIT]: (state, action) => {
        return {
            ...state,
            currentBook: action.currentBook
        }
    }
})
import { createReducer } from './../helpers/CreateReducer'

import { BOOKS_INDEX, BOOKS_REQUEST, BOOKS_RECEIVED, BOOK_EDIT_TOGGLE, BOOK_EDIT, BOOKS_TOTAL_RECEIVED } from './../actions/BookActions'
import { initialBook } from '../models/Book'

const booksInitialState = {
    isEditing: false,
    isNew: false,
    isFetching: false,
    books: [],
    currentBook: initialBook,
    totalBooks: 0
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
    },
    [BOOKS_TOTAL_RECEIVED]: (state, action) => {
        return {
            ...state,
            totalBooks: action.total
        }
    }

})
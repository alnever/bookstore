import axios from "axios"
import { initialBook } from "../models/Book"

export const BOOKS_INDEX = 'BOOKS_INDEX_ACTION'

export const BOOKS_REQUEST = 'BOOKS_FETCH_ACTION'
export function BooksRequest() {
    return {
        type: BOOKS_REQUEST
    }
}

export const BOOKS_RECEIVED = 'BOOKS_RECEIVED_ACTION'
export function BooksReceived(data) {
    return {
        type: BOOKS_RECEIVED,
        books: data
    }
}

export const BOOKS_FETCH = 'BOOKS_FETCH_ACTION'
export function BooksFetch() {
    return dispatch => {

        console.log("Start books fetching")
        dispatch(BooksRequest)

        return axios.get('http://localhost:8080/books')
            .then(
                response => { 
                    console.log('Books are fetched')
                    console.log(response.data)
                    dispatch(BooksReceived(response.data))
                }
            )
    }
}

export const BOOK_EDIT_TOGGLE = 'BOOK_EDIT_TOGGLE_ACTION'
export function BookEditToggle(payload) {
    return {
        type: BOOK_EDIT_TOGGLE,
        currentBook: payload.currentBook,
        isNew: payload.isNew,
        isEditing: payload.isEditing
    }
}

export const BOOK_EDIT = 'BOOK_EDIT_ACTION'
export function BookEdit(payload) {
    return {
        type: BOOK_EDIT,
        currentBook: payload
    }
}

export const BOOK_CREATE = 'BOOK_CREATE_ACTION'
export function BookCreate(payload) {
    return dispatch => {
        console.log(payload)
        dispatch(BookEditToggle({isEditing: false, isNew: false, currentBook: initialBook}))

        return axios.post('http://localhost:8080/books', payload)
            .then(
                dispatch(BooksFetch())
            )
    }
}

export const BOOK_SAVE = 'BOOK_SAVE_ACTION'
export function BookSave(payload) {
    return dispatch => {
        console.log(payload)
        dispatch(BookEditToggle({isEditing: false, isNew: false, currentBook: initialBook}))

        return axios.put(`http://localhost:8080/books/${payload.id}`, payload)
            .then(
                dispatch(BooksFetch())
            )
    }
}

export const BOOK_DELETE = 'BOOK_DELETE_ACTION'
export function BookDelete(payload) {
    return dispatch => {
        console.log(payload)

        return axios.delete(`http://localhost:8080/books/${payload.id}`)
            .then(
                dispatch(BooksFetch())
            )
    }
}


import axios from "axios"
import { useDispatch } from "react-redux"

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
        dispatch(BooksRequest)

        return axios.get('http://localhost:8080/books')
            .then(
                response => { 
                    dispatch(BooksReceived(response.data))
                }
            )
    }
}


import React from 'react'
import { Button } from 'reactstrap'
import { useDispatch } from 'react-redux'

import { BookEditToggle } from '../store/actions/BookActions'
import { initialBook } from '../store/models/Book'

export function Toolbar() {
    const dispatch = useDispatch()

    return (
        <div className="d-flex flex-row p-2 justify-content-start">
            <Button outline color="success" onClick={ 
                () => dispatch(BookEditToggle( {isNew: true, isEditing:true, currentBook: initialBook} ))
            }>
                Add a new book
            </Button>
        </div>
    )
}
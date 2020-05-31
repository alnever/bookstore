import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Table, Button } from 'reactstrap'

import { bookIndex } from './../store/selectors/BookSelectors'
import { BookEditToggle, BookDelete } from '../store/actions/BookActions'

const BookList = () => {
    const books = useSelector(state => bookIndex(state))
    const dispatch = useDispatch()

    return (
        <Table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Author(s)</td>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Num. in store</td>
                    <td>Operatios</td>
                </tr>
            </thead>
            <tbody>
                {
                    books.map(book => { return (
                        <tr>
                            <td>{book.id}</td>
                            <td>{book.author}</td>
                            <td>{book.title}</td>
                            <td>{book.price}</td>
                            <td>{book.volume}</td>
                            <td>
                                <Button outline color="success" className="mr-2" onClick={ 
                                    () => dispatch(BookEditToggle({isNew: false, isEditing: true, currentBook: book}))
                                }>
                                    Edit
                                </Button>
                                <Button outline color="danger" className="mr-2" onClick={
                                    () => dispatch(BookDelete(book))
                                }>Delete</Button>
                            </td>
                        </tr>
                    )})
                }
            </tbody>
        </Table>
    )
}


export default BookList;
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { currentBook, isBookEditing, isNewBook } from "../store/selectors/BookSelectors";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Label, Input } from "reactstrap";
import { BookEditToggle, BookCreate, BookEdit, BookSave } from '../store/actions/BookActions';
import { initialBook } from '../store/models/Book';

export function BookWindow() {
    const book = useSelector(state => currentBook(state))
    const isEditing = useSelector(state => isBookEditing(state))
    const isNew = useSelector(state => isNewBook(state))
    const dispatch = useDispatch()

    return(
        <Modal isOpen={isEditing}>
            <ModalHeader>
                Edit a book's info
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for='author'>Autor</Label>
                    <Input id='author' value={book.author} onChange={
                        (e) => dispatch(BookEdit({
                            ...book,
                            author: e.target.value
                        }))
                    }></Input>
                </FormGroup>
                <FormGroup>
                    <Label for='title'>Title</Label>
                    <Input id='title' value={book.title} onChange={
                        (e) => dispatch(BookEdit({
                            ...book,
                            title: e.target.value
                        }))
                    }></Input>
                </FormGroup>
                <FormGroup>
                    <Label for='price'>Price</Label>
                    <Input id='price' value={book.price} min={0.00} max={100.00} type="number" step="1" onChange={
                        (e) => dispatch(BookEdit({
                            ...book,
                            price: e.target.value
                        }))
                    }></Input>
                </FormGroup>
                <FormGroup>
                    <Label for='volume'>Number of the book in the store</Label>
                    <Input id='volume' value={book.volume} min={0} max={100} type="number" step="1" onChange={
                        (e) => dispatch(BookEdit({
                            ...book,
                            volume: e.target.value
                        }))
                    }></Input>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="success" className="m-2" onClick={
                    () => {
                        if (isNew) {
                            dispatch(BookCreate(book))
                        } else {
                            dispatch(BookSave(book))
                        }
                    }
                }>
                    Save
                </Button>
                <Button outline color="danger" className="m-2" onClick={ 
                    () => dispatch(BookEditToggle({isNew: false, isEditing: false, currentBook:initialBook}))
                }>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
    
}
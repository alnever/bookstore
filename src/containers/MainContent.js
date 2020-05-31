import React from 'react'
import { BookCard } from './../components/BookCard'
import { useSelector } from 'react-redux'

import { bookIndex } from './../store/selectors/BookSelectors'

const MainContent = () => {
    const books = useSelector(state => bookIndex(state))

    console.log(books)

    return (
        <div className="d-flex p-2 flex-row flex-wrap">
            {
                books.map( book => <BookCard book={book} />)
            }
        </div>
    )
}


export default MainContent;


import React, { useEffect } from 'react'
import { BookCard } from './../components/BookCard'
import { useSelector, useDispatch } from 'react-redux'

import { bookIndex } from './../store/selectors/BookSelectors'
import { BooksFetch } from './../store/actions/BookActions'

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


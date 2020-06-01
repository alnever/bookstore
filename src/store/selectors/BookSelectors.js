export const bookIndex = state => {
    return state.books.books
}

export const currentBook = state => {
    return state.books.currentBook
}

export const isBookEditing = state => {
    return state.books.isEditing
} 

export const isNewBook = state => {
    return state.books.isNew
} 

export const totalBooks = state => {
    return state.books.totalBooks
}
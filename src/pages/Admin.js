import React from 'react';

import { Toolbar } from './../containers/Toolbar';
import BookList from './../containers/BookList';
import { BookWindow } from '../containers/BookWindow';

export function Admin() {
  return (
      <div className="container-sm">
        <Toolbar />
        <BookWindow />
        <BookList />
      </div>
  )
}
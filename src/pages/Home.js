import React from 'react';

import { Header } from './../components/Header'
import MainContent from './../containers/MainContent';
import { useSelector } from 'react-redux';
import { totalBooks } from '../store/selectors/BookSelectors'

export function Home() {
  const total = useSelector(state => totalBooks(state))

  return (
      <div className="container-sm">
        <Header total = {total} />
        <MainContent />
      </div>
  )
}
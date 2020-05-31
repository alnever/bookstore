import React from 'react';

import { Header } from './../components/Header'
import MainContent from './../containers/MainContent';

export function Home() {
  return (
      <div className="container-sm">
        <Header />
        <MainContent />
      </div>
  )
}
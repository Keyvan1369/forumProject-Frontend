import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'

export const MainLayout = ({children}) => {
  return (
    <>
    <Header />
    <section>{children}</section>
    <Footer />
    </>
  );
}

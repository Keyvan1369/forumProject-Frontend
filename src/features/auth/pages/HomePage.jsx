import React from 'react'
import { HomeForm } from '../component/HomeForm'
import { Footer } from '../../../shared/components/Footer'
import { Header } from '../../../shared/components/Header'

export const HomePage = () => {
  return (
    <>
    <div><Header/></div>
    <div><HomeForm/></div>
    <div><Footer/></div>
    </>
    
  )
}

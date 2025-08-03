import React from 'react'
import { AuthFooter } from '../AuthFooter'

export const AuthLayout = ({children}) => {
  return (
    <>
     <div>{children}</div>
     <AuthFooter/>
    </>
   
  )
}

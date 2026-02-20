import React from 'react'
import Product from './Component/Product'
import Category from './Component/Category'
import Footer from './Component/Footer'
import Nav from './Component/Nav'

function App() {
  return (
    <div className='container px-4 mx-auto'>
      <Nav />
      <Category />
      <Product />
      <Footer />
    </div>
  )
}

export default App
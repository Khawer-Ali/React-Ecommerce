import React from 'react'
import Products from '../component/Products'

const Home = () => {
  return (
    <div>
        <h1>Welcome to iStore</h1>
        <section>
            <h2>Products</h2>
            <Products />
        </section>
    </div>
  )
}

export default Home
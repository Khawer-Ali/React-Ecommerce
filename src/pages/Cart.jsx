import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/CartSlice'

const Cart = () => {

  const getTotal = () => {
    if (localStorage.getItem('products')) {
      const sumPrice = JSON.parse(localStorage.getItem('products')).map((item) => {
        return item.price;
      }).reduce((acc, price) => {
        return acc + price;
      }, 0)
      return sumPrice;
    }
  };

  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const [totalPrice, settotalPrice] = useState(() => getTotal())

  const handleRemove = (product) => {
    dispatch(remove(product.id))
    const newCartList = JSON.parse(localStorage.getItem('products')).filter((item) => {
      return item.id !== product.id;
    });
    localStorage.setItem('products', JSON.stringify(newCartList))
  };


  useEffect(() => {

    if (!localStorage.getItem("products")) {
      localStorage.setItem('products',[])
    }

    if (products.length>0) {
      localStorage.setItem('products', JSON.stringify(products))
      if (localStorage.getItem('products')) {
        const sumPrice = JSON.parse(localStorage.getItem('products')).map((item) => {
          return item.price;
        }).reduce((acc, price) => {
          return acc + price;
        }, 0)
        settotalPrice(sumPrice)
      }
    }
  }, [products])



  return (
    <div>
      <div className="cartWrapper">
        <h2>Cart</h2>
        {
          localStorage.getItem('products') && JSON.parse(localStorage.getItem('products')).map(products => {
            return <div className="productCart">
              <img src={products.image} alt="" />
              <h3>{products.title}</h3>
              <h3>{products.price}</h3>
              <button onClick={() => handleRemove(products)} className="btn">Remove</button>
            </div>
          })
        }
        <div className="checkout">
          <span>Price : ${Math.round(totalPrice)}</span>
          <button onClick={() => alert("Checkout Funtionalty will add soon...")} className="btn">Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
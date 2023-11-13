import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {add} from '../store/CartSlice';
import { fetchProduct ,STATUES} from '../store/ProductSlice';



const Products = () => {

    // const [product, setProduct] = useState([]);
    const dispatch = useDispatch();
    const {data:product,status} = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(fetchProduct());
    //   const fetchProduct = async () => {
    //       const products = await fetch("https://fakestoreapi.com/products");
    //       const json = await products.json();
    //       console.log(json);
    //       setProduct(json);
    //   };

    //   fetchProduct();
    }, [])
    
    const handleAdd = (product) => {
        dispatch(add(product))
    };

    if (status === STATUES.LOADING) {
        return <h2>Loading 🕑...</h2>
    }

      if (status === STATUES.ERROR) {
        return <h2>Something went wrong 🤦‍♂️...</h2>
    }


  return (
    <div className='card'>
        {product.map(item => {
            return (
                <div>
                    <img className='itemImg' src={item.image} alt="" />
                     <h2>{item.title}</h2>
                     <p>${item.price}</p>
                     <button onClick={() => handleAdd(item)} className="btn">Add to Cart</button>
                </div>
            )
        })}
    </div>
  )
}

export default Products
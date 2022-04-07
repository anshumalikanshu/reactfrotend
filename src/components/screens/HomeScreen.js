import React ,{useEffect,useState} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import products from '../../products'
import Product from './Product'
import axios from axios


function HomeScreen() {
  const [products,setProducts] = useState([])
  useEffect( ()=>{
    const{data} = await axios.get("http://127.0.0.1:8000/api/products")

  } )
  return (
  <div>
    <h1>Latest Products </h1>
    <div>
        <Row>{products.map(product=>(
        <Col key = {product._id}  sm={12} md ={6} lg={4} xl={3}>
           <Product product={product}> </Product>
            </Col>
        ) ) }</Row>
    </div>
    </div>
  )
}

export default HomeScreen
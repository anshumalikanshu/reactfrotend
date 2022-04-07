import React from 'react'
import { Card, CardImg } from 'react-bootstrap'
import Rating from '../Rating'
import { Link } from 'react-router-dom'

function Product({product}) {
  return (
    <div>
    <Card className='my-3 p-3 rounded'>
        <Link to={ `/product/${product._id}`}> 
  <Card.Img src={product.image}></Card.Img>
        </Link>
        <Card.Body>
          <Card.Title as="div"> 
          {product.name}
          </Card.Title>
          <Card.Text as="div" className='my-3'>
            <Rating value ={product.rating} text={`from ${product.numReviews}  reviews`} color = "#EECF39" ></Rating> 
                
          </Card.Text>
          <Card.Text as="h3" >$ {product.price} </Card.Text>
        </Card.Body>
    </Card>
    </div>
  )
}

export default Product
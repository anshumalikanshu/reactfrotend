import React from 'react'
import {ListGroup,Image,Button,Card,Row,Col} from 'react-bootstrap'
import { Link,useParams } from 'react-router-dom'
import second from '../Rating'
import products from '../../products'
import Rating from '../Rating'



function ProductScreen() {
  const {id} = useParams()
  const product = products.find((p)=>p._id===id )
  return (

       <Row> <Col md={6}><Image src={product.image} alt={product.name} fluid></Image>   </Col>
        <Col md={3}> 
       <ListGroup variant="flush">
          <ListGroup.Item> <h3>{product.name} </h3></ListGroup.Item>
          <ListGroup.Item> {product.description} </ListGroup.Item>
          <ListGroup.Item><Rating value={product.rating}  text={`from ${product.numReviews} reviews`} color = "#EECF39" ></Rating></ListGroup.Item>
          <ListGroup.Item> Price: $ {product.price} </ListGroup.Item>
        </ListGroup>
       </Col>
       <Col md={3}> 
       <Card>
         <ListGroup variant='flush'>
           <ListGroup.Item>
             <Row>
               <Col><strong>Price:</strong></Col> 
               <Col><strong>$</strong>{product.price}</Col>
            </Row>
           </ListGroup.Item>
           <ListGroup.Item>
           <Row>
             <Col><strong>Status:</strong> </Col> 
             <Col>{ product.countInStock>0 ? "In Stock": "Out of stock" } </Col>
          </Row>
           </ListGroup.Item>
           <ListGroup.Item >
           <Button className='btn-block' type='button' disabled={product.countInStock==0}> 
               Add to Cart
           </Button>
           </ListGroup.Item>
         </ListGroup>
       </Card>
       </Col>
       </Row>



  )
}

export default ProductScreen
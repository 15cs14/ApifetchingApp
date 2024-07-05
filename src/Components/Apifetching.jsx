import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Apifetching.css'


function Apifetching() {
    const base_url='https://dummyjson.com/products'
    const [product,setProduct]=useState([])

    //function for api fetching
    const fetchData=async()=>{
        const response= await fetch(base_url)
        .then(res=>res.json())//json to array
         .then(data=>setProduct(data.products))
      
   }
    console.log(product);//array(30)
    //The useEffect hook allow you to perform side effect in your component
    useEffect(()=>{
        fetchData()
    },[])

  return (
   <div className='card'>
    {
        product.map((item)=>(
            //product dispaly as card
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {item.thumbnail} />
   
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <div className='text-center'>
        <Button  variant="primary">Buy Now</Button>
        </div>
      </Card.Body>
    </Card>
            
        ))
    }

   </div>
  )
}

export default Apifetching
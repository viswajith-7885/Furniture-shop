import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from './Context'
import Card from 'react-bootstrap/Card';




function Viewproduct() {


const{id} =useParams()
const pro = useContext(Context)
const {products} = pro
const filterdata = products.filter((e)=>e.id===id) 

  return (
    <div>
    {
      filterdata.map((e)=>(
        <Card style={{ width: '18rem' }} className='cardMain'>
    <Card.Img variant="top" src={e.image} />
    <Card.Body>
      <Card.Title>{e.category}</Card.Title>
      <Card.Text>
       {e.name}
      </Card.Text>
      <Card.Text>
      {e.prize}
     </Card.Text>
    </Card.Body>
  </Card>
      ))
    }
    
    
    </div>
  )
}

export default Viewproduct
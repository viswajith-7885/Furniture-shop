import {useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Products.css'
import { useNavigate } from 'react-router-dom';
import { Context } from './Context';



function Products() {


    const pro=useContext(Context)
    const {products}=pro
    const nav=useNavigate()
  return (
    <div div className='d-flex  flex-column container'>
    <div className="row gap-5">
    {
        products.map((e)=>(
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
      <Button variant="primary" onClick={()=>nav(`/view/${e.id}`)}>view</Button>
    </Card.Body>
  </Card>

        ))
    }
    </div>
    
  </div>
  )
}

export default Products

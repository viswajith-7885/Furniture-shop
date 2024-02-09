import React, { useContext } from 'react'
import { Context } from './Context'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';






function Sofas() {

    const nav = useNavigate()
    const pro = useContext(Context)
    const {products} = pro
    const filterdata = products.filter((e)=>e.category==="sofa")



  return (
    <div>
        <h1>Sofas</h1>
        <div div className='d-flex  flex-column container'>
    <div className="row gap-5">
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
      <Button variant="primary" onClick={()=>nav(`/view/${e.id}`)}>view</Button>
    </Card.Body>
  </Card>
        ))
    }
    
    </div>
    </div>
    </div>
  )
}

export default Sofas
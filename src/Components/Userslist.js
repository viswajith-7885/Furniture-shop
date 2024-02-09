import React from 'react'
import { Carousel } from 'react-bootstrap';


function Userslist() {
  
   


    // useEffect(()=>{
    //     axios.get("http://localhost:3031/users")
    //     .then(res=>setuser(res.data))
    //     .catch(err=>console.log(err))
    // },[])
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1632854270121-0b0d4f33c99a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fhttps://media.istockphoto.com/id/1153973780/photo/interior-of-a-cafe-or-restaurant.jpg?s=1024x1024&w=is&k=20&c=kzX_NJ6V9prNDBoGP-lekTC6kHTz2_dmUYfqOtZ9_t4=DB8MHxzZWFyY2h8MTB8fGZ1cm5pdHVyZSUyMHNob3B8ZW58MHx8MHx8fDA%3D"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/157281797/photo/ancient-office-room.jpg?s=612x612&w=0&k=20&c=zIFkZKO8Cnpz6iY0ECbE4F1w49OeJ6diozO3bPEA1go="
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  )
}

export default Userslist
import React, {useState, useEffect} from 'react';
import '../App.css'
import './mockPage'
export default function MainPage ({match}){
  
  // Returns a stateful value, and a function to update it.
  const [items, setItems] = useState([]);


  // navigation link function
  // function handleLink(nav) {
  //     window.location.href = nav;
  //     console.log('The link was clicked.')
  // }


  // fetches data from the server
  // matches with product id
  function getBooks(){
    fetch(`http://localhost:4000/product-details/${match.params.id}`)
    .then(response => response.json())
    .then(response => {
      setItems(response.data); 
      console.log(response)
       })
    .catch(err => console.error(err))
  }

  // remembers the function passed
  useEffect(() => { 
    getBooks()
  })

 

// maps the items
// returns the mapped items
  return (
    <React.Fragment>
    <div className="App" >

      {items.map((product)=>{
        return(
          <div className = "wrapper" key = {product.id}>
            <div class = "product-img">
              <img src={product.image} alt="" height="420" width= "327"/>
            </div>
            <div class="product-info">
              <div class="product-text">
                <h1>{product.name}</h1>
                <h2>{product.ratings}</h2>
                <p>{product.details}</p>
                <p>{product.reviews}</p>

              </div>
              <div class="product-price-btn">
             
             <button type="button">add to basket</button>
           </div>
              <div class="product-price-btn">
              <p>£<span>{product.price}</span></p>
              </div>
            </div>      
        </div>
      )})}
    </div>
    </React.Fragment>
  )
};
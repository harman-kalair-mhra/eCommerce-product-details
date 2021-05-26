import React, {useState, useEffect} from 'react';
import './main'
import '../App.css';

function MockPage (){
  
  const [items, setItems] = useState([]);


  function handleLink(nav) {
      window.location.href = nav;
      console.log('The link was clicked.')
  }


  function getBooks(){
    fetch('http://localhost:4000/products')
    .then(response => response.json())
    .then(response => {
      setItems(response.data); 
      console.log(response)
       })
    .catch(err => console.error(err))
  }


  useEffect(() => { 
    getBooks()
  }, [])


  return (
    <React.Fragment>
    <div>
      {items.map((product)=>{
        return(
          <div className="wrapper1">
            <div key = {product.id}>
              <div class ="product-img1">
                <img src={product.image} alt="" height="420" width="327"/>
              </div>
              <div class="product-info1">
                <div class="product-text1">
                  <h1>{product.name}</h1>
                  <h2>{product.ratings}</h2>
                  <p></p>
                </div>
                <div class="product-price-btn1">
                  <p>£<span>{product.price}</span></p>   
                  <button type="button" onClick={()=>{handleLink("/main")}}>Details</button>
                </div>
              </div>
            </div>
          </div>
        )})}
    </div>
    </React.Fragment>
  )
};

export default MockPage
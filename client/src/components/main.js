import React, {useState, useEffect} from 'react';
import './details'

export default function MainPage (){
  
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
    <div className="App">
      {items.map((product)=>{
        return(
          <div key = {product.id}>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <button onClick={()=>{handleLink("/details")}}>
          SELECT
        </button>
        </div>
      )})}
    </div>
    </React.Fragment>
  )
};
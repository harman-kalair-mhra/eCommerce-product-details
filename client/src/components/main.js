import React, {useState, useEffect} from 'react';
import './details'

export default function MainPage (){
  
  const [items, setItems] = useState([]);

  // navigation link function
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

  // remembers the function passed
  useEffect(() => { 
    getBooks()
  }, [])

// maps the items
// returns the mapped items
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
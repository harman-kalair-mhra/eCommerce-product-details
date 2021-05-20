import React, {useState, useEffect} from 'react';
import './details'
import styled from 'styled-components'
export default function MainPage (){
  
  const [items, setItems] = useState([]);

  // const mystyle = {
  //   color: "white",
  //   backgroundColor: "DodgerBlue",
  //   padding: "10px",
  //   fontFamily: "Arial"
  // }

  const StyledDetails = styled.div`
  color: green;
  font-size: 18px;
  background-color: #f5f5dc;
  font-weight: 900
  border-style: solid;
  margin: 10px;
  padding: 10px;
`;

  // navigation link function
  // function handleLink(nav) {
  //     window.location.href = nav;
  //     console.log('The link was clicked.')
  // }

  function getBooks(){
    fetch('http://localhost:4000/product-details/7')
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
    <div className="App" >
      {items.map((product)=>{
        return(
          <div key = {product.id}>
            <h1>Book Details</h1>
            <StyledDetails>
          <p>Name: {product.name}</p>
          <p>Details: {product.details}</p>
          <p>Price: {product.price}</p>
          <p>Reviews: {product.reviews}</p>
          <p>Ratings: {product.ratings}</p>
          </StyledDetails>
        </div>
      )})}
    </div>
    </React.Fragment>
  )
};
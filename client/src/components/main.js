import React, {Component} from 'react';
import './details'


class  mainPage extends Component {

    state = {
      products: []
    }
  
    componentDidMount() {
      this.getBooks()
    }
    

    // handleClick = () => {
    //   history.push('/details')
    //   console.log('The link was clicked.');  
    // }
    
    handleLink(nav) {
        window.location.href = nav;
        console.log('The link was clicked.')
    }

    getBooks = () => {
      fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(response => this.setState({products: response.data}))
      .catch(err => console.error(err))
    }
  
    renderProduct = ({ id, name }) => <div key = {id}>{name}</div>
  
  
    render() {
      const { products } = this.state
    return (
      <div className="App">
        {products.map(this.renderProduct)}
        <button onClick={()=>{this.handleLink("/details")}}>
      SELECT
    </button>
      </div>

    );
  }
  }

  export default mainPage

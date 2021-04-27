import React, {Component} from 'react';
import './App.css';


class  App extends Component {

  state = {
    products: []
  }

  componentDidMount() {
    this.getBooks()
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

    </div>
  );
}
}

export default App;

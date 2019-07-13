import React, {Component} from "react";
import ReactDOM from "react-dom";
import products from "./data/products";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products
    }
  }
  render() {
    const products = this.state.products;
    return (
      <>
        <Products products={products}/>
      </>
    )
  }
}

class Products extends React.Component {

  handleClick() {
    
  }

  render() {

    return (
      <>
      <h2>Produkty</h2>
      <ul>
        {
          this.props.products.map( (product, index) => (
            <li key={index}>
              <p>{product.id}</p>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button className="btn btn-primary" onClick={ ()=> this.handleClick }>Kup</button>
            </li>
          ))
        }
      </ul>
      </>
    )
  }
}

class Cart extends React.Component {
constructor(props){
  super(props);
  this.state = {
    products: []
  }
}
  render() {

    return(
      <>
      <h2>Koszyk</h2>
      <ul>
        {
          this.state.products.map( (product, index) => (
            <li key={index}>
              <p>{product.id}</p>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button className="btn btn-primary">Kup</button>
            </li>
          ))
        }
      </ul>
      </>
    )
  }
}

class App extends React.Component {
  render() {
    return <Shop />
  }
}


/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App/>, document.getElementById("app"));
export {
  App,
  Shop,
  Products,
  //Cart
};
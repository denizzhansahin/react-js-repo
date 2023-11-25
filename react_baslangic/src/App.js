import React, { Component } from 'react';
//import Navi from './NaviILK_COMPONENT'; //dışarıdan companent geldi
import Navi from './Navi'; //dışarıdan companent geldi

import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap';

import alertify from "alertifyjs";
import { Route } from 'react-router-dom';


import NotFound from "./NotFound";
import CartList from "./CartList";



export default class App extends Component {

  state = { currentCategory: "", products: [], cart: [] };

  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));;
  }

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    console.log(category);
    this.getProducts(category.id);
  }

  addtoCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
  }

  render() {
    //titleProduct = "Product List";
    //titleCategory = "Category List";
    //baskaBirsey = "";
    let prodcutInfo = { title: "ProductList", baskaBirsey: "birşey" };
    let categoryList = { title: "CategoryList" };
    //alertify.succes("Merhaba");


    return (
      <div>



        <Container>
          <Navi cart={this.state.cart} />


          <Row>
            <Col xs="3"><CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory}/*baskaBirsey = {baskaBirsey} title={titleProduct}*/ info={categoryList} /></Col>
            <Col xs="9">


                <ProductList
addtoCart={this.addtoCart}
products={this.state.products} currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={prodcutInfo} /*title="Product List"*/ />


              
             




           </Col>



          </Row>
        </Container>
      </div>
    );
  }
}



/*
function App() {
  let titleProduct = "Product List";
  let titleCategory = "Category List";
  let baskaBirsey = "";
  let prodcutInfo = {title:"ProductList", baskaBirsey : "birşey"};
  let categoryList = {title:"CategoryList"};

  return (
    <div>
      <h2>Hello from React!!!</h2>
      <h3>Deneme</h3>


      <Container>
        <Row>
        <Navi></Navi>
        </Row>

        <Row>
          <Col xs="3"><CategoryList /*baskaBirsey = {baskaBirsey} title={titleProduct}




  );
}
*/


//export default App;
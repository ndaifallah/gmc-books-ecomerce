import React, { Component } from 'react';
import 'antd/dist/antd.css'
import Books from './components/Books';
import Cart from './components/Cart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      books_added: []
    }
  }

  addToCart = (title) => {
    console.log('Adding to cart from App.js', title);
    // Maintenant on met les livres ajoutés une fois le bouton add book, dans books_added dans le state du App
    // Si on a à faire avec les tablaux, on utilise le spread pour r&écuperer les elements de l'ancien state, et on fait l'ajout du nouveau
    this.setState({
      books_added: [...this.state.books_added, title]
    })
  }

  componentDidMount = async () => {
    let resp = await fetch("http://gutendex.com/books/");
    let data = await resp.json();
    this.setState({
      data: data.results
    });
  }
  render(){
    console.log(this.state)
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <Books books={this.state.data} onAddToCart={this.addToCart}/>
        <Cart panier={this.state.books_added} />
      </div>
    );
  }
}

export default App;

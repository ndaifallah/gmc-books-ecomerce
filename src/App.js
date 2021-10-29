import React, { Component } from 'react';
import 'antd/dist/antd.css'
import Books from './components/Books';
import Cart from './components/Cart';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      books_added:[]
    }
  }
  componentDidMount = async () => {
    let resp = await fetch("http://gutendex.com/books/");
    let data = await resp.json();
    console.log(data);
    this.setState({
      data: data.results
    })
  }
  
  addBokkstoApp=(roro)=>{
    console.log('adding books to app',roro); // pour le books to app
     this.setState({ books_added:[...this.state.books_added,roro]
  })
  
  }


  
  render(){
    console.log(this.state.books_added)
    return (
      <div style={{
        display:'flex',
        flexWrap:'wrap',
        width:'80vw',
      }}>
        <Books books={this.state.data} 
        booktoapp={this.addBokkstoApp}/>  {/*pour books to app*/}
      <Cart  panier={this.state.books_added} />
      </div>
    );
  }
}

export default App;

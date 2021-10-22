import React, { Component } from 'react';
import 'antd/dist/antd.css'
import Books from './components/Books';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount = async () => {
    let resp = await fetch("http://gutendex.com/books/");
    let data = await resp.json();
    console.log(data);
    this.setState({
      data: data.results
    });
  }
  render(){
    return (
      <div>
        <Books books={this.state.data}/>
      </div>
    );
  }
}

export default App;

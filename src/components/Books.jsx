import React, { Component } from 'react';
import SingleBook from './SingleBook'

class Books extends Component {
    render(){
        return (<div>
            {this.props.books.map((el) => <SingleBook book={el}/>)}
        </div>)
    }
}

export default Books;
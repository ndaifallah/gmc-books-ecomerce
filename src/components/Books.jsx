import React, { Component } from 'react';
import SingleBook from './SingleBook'

class Books extends Component {
    addToCart1=(title)=>{
          console.log('adding single to books',title);  
          this.props.booktoapp(title);
    }
    render(){
        
        return (<div style={{
                 display:'flex',
                 flexWrap:'wrap',
        }}>
            {this.props.books.map((el) => 
            <SingleBook book={el} addBook={this.addToCart1}/>)}
        </div>)
    }
}

export default Books;
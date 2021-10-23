import React, { Component } from 'react';
import SingleBook from './SingleBook'

class Books extends Component {
    // 1- Afin de faire une passation d'information entre fils(SingleBook) et parents (Books) on doit déclarer une fonction 
    //avec comme argument l'information que tu veux récupérer depuis le fils
    addToCart1 = (title) => {
        // title est récupéré depuis le fils quand on click
        console.log('Adding book', title);
    }

    render(){
        return (<div style={{ 
            display: 'flex',
            flexWrap: 'wrap',
            
        }}>
            {/* 2- On passe la fonction addToCart au singleBook pour récupérer l'information title a chaque fois on click sur le bouton add */}
            {this.props.books.map((el) => <SingleBook book={el} addBook={this.addToCart1}/>)}
        </div>)
    }
}

export default Books;
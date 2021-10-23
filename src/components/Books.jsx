import React, { Component } from "react";
import SingleBook from "./SingleBook";

class Books extends Component {
	addToCart1 = (title) => {
		console.log("adding book", title);
		this.props.getBook(title);
	};

	render() {
		return (
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
				}}
			>
				{this.props.books.map((el, idx) => (
					<SingleBook book={el} key={idx} addBook={this.addToCart1} />
				))}
			</div>
		);
	}
}

export default Books;

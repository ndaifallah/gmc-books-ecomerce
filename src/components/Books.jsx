import React, { Component } from "react";
import SingleBook from "./SingleBook";

class Books extends Component {
	addToCart1 = (title, openState) => {
		console.log("adding book", title);
		console.log("state", openState);
		this.props.getBook(title, openState);
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

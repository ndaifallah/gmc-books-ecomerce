import React, { Component } from "react";
import "antd/dist/antd.css";
import Books from "./components/Books";
import Cart from "./components/Cart";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			books_added: [],
		};
	}
	addToCart2 = (title) => {
		console.log("book in app", title);
		this.setState({ books_added: [...this.state.books_added, title] });
	};

	componentDidMount = async () => {
		let resp = await fetch("http://gutendex.com/books/");
		let data = await resp.json();
		console.log("test", data);
		this.setState({
			data: data.results,
		});
	};
	render() {
		console.log("Book list", this.state.books_added);
		return (
			<div>
				<Books books={this.state.data} getBook={this.addToCart2} />
				<Cart info={this.state.books_added} />
			</div>
		);
	}
}

export default App;

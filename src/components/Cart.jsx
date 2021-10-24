import React, { Component } from "react";
import { Divider } from "antd";

class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}
	render() {
		return (
			<div
				style={{
					width: 300,
					height: 600,
					display: `${this.state.open ? "none" : "flex"}`,
					flexDirection: "column",
					backgroundColor: "white",
					position: "fixed",
					right: "1rem",
					top: "1rem",
					padding: "1rem",
					overflowY: "scroll",
					border: "1px solid lightgrey",
					borderRadius: "6px",
				}}
			>
				<h2>Mon panier</h2>
				{this.props.info.map((el) => (
					<>
						<p>{el}</p>
						<Divider />
					</>
				))}
			</div>
		);
	}
}

export default Cart;

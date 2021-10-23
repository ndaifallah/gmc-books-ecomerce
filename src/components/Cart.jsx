import React, { Component } from "react";
import { Divider } from "antd";

class Cart extends Component {
	render() {
		return (
			<div
				style={{
					width: 300,
					maxHeight: 400,
					display: "flex",
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
						<Divider />
						<p>{el}</p>
						<Divider />
					</>
				))}
			</div>
		);
	}
}

export default Cart;

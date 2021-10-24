import React, { Component } from "react";
import { Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";

class SingleBook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: false,
		};
	}

	render() {
		return (
			<Card
				style={{
					width: 200,
					margin: 10,
					backgroundColor: `${this.state.color}`,
				}}
				cover={
					<img alt="example" src={this.props.book.formats["image/jpeg"]} />
				}
				actions={[
					<PlusOutlined
						onClick={(e) => {
							this.props.addBook(this.props.book.title, this.state.color);

							this.state.color === "transparent"
								? this.setState({ color: "red" })
								: this.setState({ color: "transparent" });
						}}
					/>,
				]}
			>
				<Card.Meta
					// avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
					title={this.props.book.title}
					description={this.props.book.authors[0]?.name}
				/>
			</Card>
		);
	}
}

export default SingleBook;

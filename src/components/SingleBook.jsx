import React, { Component } from 'react';
import { Card } from 'antd';

class SingleBook extends Component {

    render(){
        return(<Card
                style={{ width: 300 }}
                cover={
                <img
                    alt="example"
                    src={this.props.book.formats["image/jpeg"]}
                />
                }
                actions={[
                ]}
            >
                <Card.Meta
                // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={this.props.book.title}
                description={this.props.book.authors[0].name}
                />
            </Card>)
    }
}

export default SingleBook;
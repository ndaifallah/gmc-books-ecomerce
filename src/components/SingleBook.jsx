import React, { Component } from 'react';
import { Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons'

class SingleBook extends Component {

    render(){
        // 3- Ici on execute à chque fois on click la fonction passée par le parebnt, en mettant les données du titre comme argument,
        // Le nom de la fonction est le nom du prop à traver lequel on l'a passé
        return(<Card
                style={{ 
                    width: 200,
                    margin: 10
                }}
                cover={
                    <img src={this.props.book.formats["image/jpeg"]} />
                }
                actions={[
                    <PlusOutlined onClick={e => this.props.addBook(this.props.book.title)} />
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
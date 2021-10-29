import React, { Component } from 'react';
import { Card } from 'antd';
import {RadarChartOutlined } from  "@ant-design/icons";
class SingleBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
          Click:false  // pour colors red
        }
      }
    render(){
        return(<Card
           style=  
         
           {this.state.Click
            ?{  width: 200,
                margin: 10, backgroundColor:'red'} // pour colors red
            :{  width: 200,
                margin: 10, backgroundColor:'white'}}
           
                cover={
                <img
                    alt="example"
                    src={this.props.book.formats["image/jpeg"]}
                />
                }
                actions={[
                    <RadarChartOutlined onClick={e=>{this.props.addBook(this.props.book.title)
                        this.setState({Click:true})}} />
                ]}
            >
                <Card.Meta
                // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={this.props.book.title}
                description={this.props.book.authors[0]?.name}
                />
            </Card>)
    }
}

export default SingleBook;
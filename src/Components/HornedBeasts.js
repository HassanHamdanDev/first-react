import React, { Component } from 'react';
import { Card, Button, Col } from 'react-bootstrap';

class HornedBeasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boost: 0,
        }
    }
    raiseBoost = () => {
        this.setState({
            boost: this.state.boost + 1
        })
    }
    getOpenModalData = () => {
        let title = this.props.title;
        let image_url = this.props.image_url;
        let description = this.props.description;
        let horns = this.props.horns;
        this.props.handleOpen(title, image_url, description, horns);
    }
    render() {
        return (
            <>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img
                            variant="top"
                            onClick={this.raiseBoost}
                            src={this.props.image_url}
                            alt="HornedBeastImage"
                            title={this.props.title}
                            width="300"
                            height="300"
                        />
                        <Card.Text>{this.state.boost} ❤</Card.Text>
                        <Card.Body>
                            <Card.Title><strong>Name :</strong>{this.props.title}</Card.Title>
                            <Card.Text>
                                <br />
                                <strong>Keyword Name :</strong> {this.props.keyword}
                            </Card.Text>
                            <Button onClick={this.getOpenModalData} variant="primary">
                                {this.props.title} Details
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }
}

export default HornedBeasts

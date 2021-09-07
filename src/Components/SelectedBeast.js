import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class SelectedBeast extends Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img
                        src={this.props.image_url}
                        className="img-fluid"
                        alt="HornedBeastImage"
                        width="900"
                        height="900"
                    />
                    <br />
                    {this.props.description}
                    <br />
                    <strong>Number Of Horns: </strong> {this.props.horns}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default SelectedBeast

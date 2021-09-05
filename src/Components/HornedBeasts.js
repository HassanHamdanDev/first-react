import React, { Component } from 'react'

class HornedBeasts extends Component {
    render() {
        return (
            <>
                <h2><strong>HornedBeast Name :</strong> {this.props.title}</h2>;
                <img src={this.props.image_url} alt="HornedBeastImage" title={this.props.title} />;
                <p><strong>HornedBeast Description : </strong>{this.props.description}</p>;
                <h3><strong>Keyword Name :</strong> {this.props.keyword}</h3>;
                <h3><strong>Number Of Horns :</strong> {this.props.horns}</h3>;
            </>
        )
    }
}

export default HornedBeasts

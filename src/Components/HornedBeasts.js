import React, { Component } from 'react'

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

render() {
    return (
        <>
            <h2><strong>HornedBeast Name :</strong> {this.props.title}</h2>;
            <img onClick={this.raiseBoost} src={this.props.image_url} alt="HornedBeastImage" title={this.props.title} />;
            <h3>{this.state.boost} ❤ </h3>
            <p><strong>HornedBeast Description : </strong>{this.props.description}</p>;
            <h3><strong>Keyword Name :</strong> {this.props.keyword}</h3>;
            <h3><strong>Number Of Horns :</strong> {this.props.horns}</h3>;
        </>
    )
}
}

export default HornedBeasts

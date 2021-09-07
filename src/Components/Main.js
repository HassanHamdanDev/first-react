import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';

class Main extends Component {


    render() {
        return (
            <div className="row">
                {
                    data.map(elem => {
                        return <HornedBeasts
                            handleClose={this.props.handleClose}
                            handleOpen={this.props.handleOpen}
                            title={elem.title}
                            image_url={elem.image_url}
                            description={elem.description}
                            keyword={elem.keyword}
                            horns={elem.horns}
                        />
                    })
                }
            </div>
        )
    }
}

export default Main

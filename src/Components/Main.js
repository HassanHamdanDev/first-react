import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = data;
    }
    render() {

        return (
            <>
                {
                    data.map(elem => {
                        return <HornedBeasts title={elem.title} image_url={elem.image_url} description={elem.description} keyword={elem.keyword} horns={elem.horns} />
                    })
                }
            </>
        )
    }
}

export default Main

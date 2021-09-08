import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';
import FormFilter from './FormFilter';

class Main extends Component {
    render() {
        return (
            <>
                <br />
                <div className="row">
                    <FormFilter
                        handleHornsSelect={this.props.handleHornsSelect}
                        handleHornsSubmit={this.props.handleHornsSubmit}
                    />
                </div>
                <br />
                {
                    this.props.filterCard ?
                        <div className="row">
                            {
                                this.props.filteredData.map(elem => {
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
                        :
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
                }
            </>
        )
    }
}

export default Main

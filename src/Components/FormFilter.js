import React, { Component } from 'react';
import data from './data.json';
import { Form, Button, FloatingLabel, Col, Row } from 'react-bootstrap';

class FormFilter extends Component {

    useFilter = arr => {
        return arr.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
    };
    render() {
        let hornsArray = [];
        let uniqueHorns;
        return (
            <Form onSubmit={this.props.handleHornsSubmit}>
                <Row className="g-2">
                    <Col md>
                        <FloatingLabel controlId="floatingSelectGrid" label="Number of Horns">
                            <Form.Select
                                aria-label="Floating label select example"
                                onChange={(event) => { this.props.handleHornsSelect(event) }}
                            >
                                <option value="">Select Number</option>
                                {data.map(elem => { return hornsArray.push(elem.horns) })}
                                {uniqueHorns = this.useFilter(hornsArray)}
                                {uniqueHorns.map(elment => {
                                    return <option value={elment}> {elment} </option>
                                })
                                }
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col sm>
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default FormFilter

import React, { Component } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';
import './AddItem.css'


class AddItem2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            date: new Date(),
            text: '' ,
            isSubmit: true,
            style: null
        }
    }

    titleHandler = (e) => {
        
        e.target.value.length > 30 ?
        this.setState({
            style:{ border: '1px solid red'},
            isSubmit: false
        })
        :
        this.setState({
            title: e.target.value,
            isSubmit: true,
            style: null
        })
    }

    textHandler = (t) => {
        this.setState({
            text: t.target.value
        })
    }
    
    sendItemHandler = (e) => {
        e.preventDefault();
        this.props.getItem(e);
    }

    render() {
        return (
            <div className="container border-black shadow mt-3" style={{background: '#ededed'}}>
                <Form className="p-5" onSubmit={ this.sendItemHandler } autoComplete="off">
                    <Form.Group as={Row} controlId="formHorizontalTitle">
                        <Form.Label column sm={2}>
                            {this.props.titleLabel}
                        </Form.Label>

                        <Col sm={10}>
                            <Form.Control style={ this.state.style } name='title' value={this.state.value} type="Text" placeholder="Title" onChange={this.titleHandler}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                    <Form.Label column sm={2} >{this.props.textareaLabel}</Form.Label>
                    <Col sm={10}>
                    <Form.Control name='textarea' as="textarea" rows="3" onChange={this.textHandler}/>
                    </Col>
                    </Form.Group>
                
                    <Form.Group as={Row} controlId="formHorizontalDate">
                        <Form.Label column sm={2}>
                            Date
                        </Form.Label>
                        <Col sm={4}>
                            <DatePicker
                                placeholderText="Select a date"
                                className="cardPick pl-4 border border-0 w-100 bg-light"
                                name='dateP'
                                selected={ this.state.date }
                                onChange={ date => this.setState({ date: date }) }
                                dateFormat= 'dd.MM.yyyy'
                                isClearable
                            />
                        </Col>
                    </Form.Group>
               
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 0 }}>
                            <Button className="bg-primary" type="submit" disabled={ !this.state.isSubmit }>{this.props.btnText}</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default AddItem2

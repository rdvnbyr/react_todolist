import React, { Component } from 'react';
import AddItem2 from '../AddItem/AddItem2';
import { Accordion, Card } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';
import DatePicker from 'react-datepicker';
import { Checkbox } from '@material-ui/core/';
import LabelSelect from '../LabelSelect/LabelSelect';
import { Button, Icon, Form, TextArea, Input } from 'semantic-ui-react'
import './Home.css';


class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }

    itemReceiverHandler = (event) => {             
        
        let itemList = [ ...this.state.items ];
        let addDate = event.target.dateP.value;

        if (addDate) {
            const date = addDate.split('.')
            const utcDate = new Date(Date.UTC(date[2], date[1] - 1, date[0]));

            itemList.push({
                title: event.target.title.value,
                date: utcDate,
                text: event.target.textarea.value,
                isChecked: false
            })
    
            this.setState({
                items: itemList
            })

        } else {
            itemList.push({
                title: event.target.title.value,
                date: null,
                text: event.target.textarea.value,
                isChecked: false
            })
    
            this.setState({
                items: itemList
            })
        }
    }

    titleChangeHandler = (e,i) => {

        const titleChange = { ...this.state.items[i]};
        titleChange.title = e.target.value;
        const items = this.state.items;
        items[i] = titleChange;

        this.setState({
            items: items
        })

    }

    checkboxHandler = (e,i) => {

        const itemList = { ...this.state.items[i]};
        itemList.isChecked = e.target.checked;
        const items = this.state.items;
        items[i].isChecked = itemList.isChecked;

        this.setState({
            isChecked: items.isChecked
        })
    }


    render() {

        return (
            <div className="container">
                <div className="px-1">

                    <AddItem2
                        getItem={ this.itemReceiverHandler }
                        titleLabel='Title'
                        textareaLabel='Memo'
                        btnText='Save'
                    />

                    <Accordion  className="p-5 w-75 m-auto">
                    {
                        this.state.items.map ( ( item, index ) => {

                            let setBackColor = '#f0efef';
                            
                            item.date === null ? setBackColor = '#f0efef'
                             :
                            item.date.getDate() === new Date().getDate() &&
                                item.date.getMonth() === new Date().getMonth() &&
                                    item.date.getYear() === new Date().getYear() ? setBackColor = '#fff591'
                             :                                  
                            item.date.getDate() === new Date().getDate() - 1 &&
                                item.date.getMonth() === new Date().getMonth() &&
                                        item.date.getYear() === new Date().getYear() ? setBackColor = '#fff591'
                             :
                            item.date.getTime() < Date.now() ? setBackColor = '#62d2a2'
                             :
                            item.date.getTime() > Date.now() ? setBackColor = '#f8b195'
                             : setBackColor = '#f0efef'
            

                            if (item.isChecked === true) {
                                setBackColor = '#79bac1'
                            }

                            return(
                                
                                <Card key={index} style={{ background: setBackColor }} className="mb-2">
                                    <Card.Header>
                                        <Checkbox
                                            onChange={ (e) => this.checkboxHandler( e,index ) }
                                            checked={ item.isChecked }         
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    
                                        <Accordion.Toggle className="mx-2 bg-primary" style={{fontSize: '12px', color: 'white'}} as={Button} variant="link" eventKey={index}>
                                            View
                                        </Accordion.Toggle>

                                        <span className="mx-2 px-2" style={{fontSize: '18px'}}>{ item.title }</span>
                            
                                        <Button
                                            inverted color='red'
                                            animated='vertical'
                                            floated='right'
                                            onClick={ () => {
                                                                let itemList = [ ...this.state.items ];
                                                                itemList.splice(index, 1);
                                                                this.setState({
                                                                    items: itemList
                                                                })
                                                            }
                                                    }
                                        >

                                            <Button.Content hidden>Delete</Button.Content>
                                            <Button.Content visible>
                                                <Icon name='delete' />
                                            </Button.Content>
                                        </Button>

                                    </Card.Header>
                                    <Accordion.Collapse eventKey={index}>
                                        <Card.Body>

                                            <LabelSelect />
                                            
                                            <Input
                                                
                                                value={ item.title }
                                                className="mb-1" 
                                                fluid icon='text width' 
                                                iconPosition='left' 
                                                placeholder='Title..'                                            
                                                onChange={ (e) => e.target.value.length < 30 ? this.titleChangeHandler(e,index) : null } 
                                            />
                                        
                                            <DatePicker
                                                placeholderText="Select a date"
                                                className="pl-4 border w-100"                                         
                                                selected={ item.date }                  
                                                onChange =  { 
                                                                date => {                                                   
                                                                            const itemChangeDate = [ ...this.state.items ];
                                                                            itemChangeDate[index].date = date;
                                                                            this.setState({
                                                                                items: itemChangeDate
                                                                            })
                                                                        } 
                                                            }
                                                dateFormat= 'dd.MM.yyyy'
                                                openToDate={ this.state.items[index].date }
                                                isClearable
                                            />

                                            <Form>
                                                
                                                <TextArea                                             
                                                    className="mt-2 mb-1"
                                                    value={ item.text }
                                                    rows={3}
                                                    onChange =  { t  => {
                                                                            let changeText = [ ...this.state.items ];
                                                                            changeText[index].text = t.target.value;
                                                                            this.setState({
                                                                                text: changeText
                                                                            })

                                                                        }  
                                                                }
                                                />  
                                            </Form>
                                                                    
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            )
                        
                        })
                    }
                    </Accordion>
                    
                </div>
            </div>
        )
    }
}

export default HomePage;

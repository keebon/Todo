import React from 'react';
import shortid from 'shortid';

export default class TodoForm extends React.Component{
    state = {
        text : ''
    }

    handleOnchange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSub = (e) => {
        e.preventDefault();
        this.props.onSub({
            id : shortid.generate(),
            text : this.state.text,
            complete : false
        });
        this.setState({
            text : ""
        });
    }

    render(){
        return(
            <div className = "todo-form">
                <form onSubmit = {this.onSub}>
                    <input value = {this.state.text} autoComplete="off" name = "text" onChange = {this.handleOnchange} className = "todo-input" />
                    <button onClick = {this.onSub} className = "todo-btn">ADD TODO</button>
                </form>
            </div>
        )
    }
}
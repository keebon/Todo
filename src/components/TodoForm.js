import React from 'react';
import shortid from 'shortid';

export default class TodoForm extends React.Component{
    state = {
        title : "",
        desc : ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        let current_datetime = new Date()
        let formatted_date = current_datetime.getFullYear() + "-" + months[current_datetime.getMonth()] + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds() 
        this.props.onSub({
            id : shortid.generate(),
            title : this.state.title,
            desc : this.state.desc,
            completed : false,
            date : formatted_date
        });
        this.setState({
            title : '',
            desc : ''
        });

    }

    render(){
        return(
            <div>
                <div className = "container" style = {{
                    width : "400px" 
                }}>
                    <form onSubmit = {this.handleSubmit}>
                        <div className="form-group">
                            <label>Email address</label>
                            <input onChange = {this.handleChange} className="form-control" name="title" placeholder="Title" />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea onChange = {this.handleChange} className="form-control" name="desc" placeholder = "Todo" rows="3" />
                        </div>
                        <button onClick = {this.handleSubmit} className="btn btn-primary">Add Todo</button>
                    </form>
                </div>
            </div>
        )
    }
}
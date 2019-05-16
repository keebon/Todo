import React from 'react';
import TodoForm from './TodoForm';

export default class Todo extends React.Component {
    render(){
        return(
            <div className = "todo">
                <TodoForm />
            </div>
        )
    }
}
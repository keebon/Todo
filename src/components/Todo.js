import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList.js';

export default class Todo extends React.Component{
    state = {
        todos : []
    }

    handleAddTodo = (todo) => {
        this.setState({
            todos : [todo, ...this.state.todos]
        });
    }

    handleGetInfo = (id) => {
        this.setState({
            todos : this.state.todos.map(todo => {
                if(todo.id === id){
                    return todo;
                }
            })
        });

    }


    render(){
        return(
            <div>
                <TodoForm onSub = {this.handleAddTodo}/>
                {this.state.todos.map(todo => 
                    <TodoList 
                    key = {todo.id}
                    todo = {todo}
                    getInfo = {() => this.handleGetInfo(todo.id)}
                    />
                )}
            </div>
        )
    }
}
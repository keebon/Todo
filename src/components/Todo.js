import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList.js';
import TodoClick from './TodoClick';

export default class Todo extends React.Component{
    state = {
        todos : [],
        clickedTodo : []
    }

    handleAddTodo = (todo) => {
        this.setState({
            todos : [todo, ...this.state.todos]
        });
    }

    handleGetInfo = (id) => {
        this.state.todos.map(todo => 
            this.setState({
                clickedTodo : todo.id === id ? [todo] : [todo]
            })
        );
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
                {this.state.clickedTodo.map(todo => 
                    <TodoClick 
                        key = {todo.id}
                        todo = {todo}
                    />
                )}
            </div>
        )
    }
}
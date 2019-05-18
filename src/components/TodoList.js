import React from 'react';

export default props => (
    <div className = "todo-item">
                <button className ="dlt" onClick = {props.onDel}> X </button>{props.todo.text}
            </div>
)
import React from 'react';

export default props => (
    <div onClick = {props.getInfo}>{props.todo.title}</div>
)

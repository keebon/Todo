import React from 'react';

export default props => <div>{props.todo.title}{props.todo.date}{props.todo.desc}{JSON.stringify(props.todo.completed)}</div>
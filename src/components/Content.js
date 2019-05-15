import React from 'react';

export default class Content extends React.Component{
    render(){
        return(
            <div className = "content">
                <div className = "container">
                <div style = {{display:'flex', marginTop: '2%'}}>
                <h4 style = {{flex:'1'}}>Title</h4><h4 style = {{flex:'1'}}>Date</h4>
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </div>
            </div>
        )
    }
}
import React from 'react';
 
const HOC = Component => (props) => {
    return (
        <div>
        <Component {...props} >
               {props.children.toLowerCase()}
            </Component>
        </div>
    )
};

const Email = (props) => (
    <div>
        {props.children}
    </div>
);

const ToLowerCase = HOC(Email);

export default ToLowerCase;
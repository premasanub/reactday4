import React from 'react';

const ComponentB = ({a}) => {
    a=a+1;
    return (
        <div>
            <h1>child without state{a}</h1>
           
        </div>
    );
};

export default ComponentB;
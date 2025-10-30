import React from 'react';

const ComponentA = ({num,setNum}) => {
    const handleAdd=()=>{
        setNum(num+1)
    }
    return (
        
        <div>
            
            <h1>child component state:{num}</h1>
            <button onClick={handleAdd}>click</button>
        </div>
    );
};

export default ComponentA;
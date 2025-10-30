import React, { useState } from 'react';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';


const App = () => {
  const a=11;
  const [num,setNum]=useState(10);
  const handleSubmit=()=>{
setNum(num+1)
};
  return (

    <div>
      <h1>App component without state a :{a}</h1>
      <h1>App Components useState value num:{num}</h1>
      
      <button onClick={handleSubmit}>click</button>
       <ComponentB a={a}/>
      <ComponentA num={num} setNum={setNum} />
    </div>
    
  );
};

export default App;
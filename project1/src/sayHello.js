import React from 'react';

function Hello() {
  const sayHello = () => {
    console.log("hello");
  };

  return (
    <div>
          <h1>This is an Hello component</h1>
      <button onClick={() => {sayHello();}}>Click Here</button>
    </div>
  );
}
export default Hello;
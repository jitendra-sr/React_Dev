import React from 'react';
import ReactDOM from 'react-dom/client';

// Component name should start with Uppercase letter.
// Also we can also make cmp in small case but to use it we import it in capital letter in other cmp
function Hello() {
  // // return <h1>Hello World</h1>;
  // return React.createElement('h2',{},'Hello World'); // Under the hood

  // We can only return single element.
  // So to return multiple component either wrap them into another element or in react fragment

  // // Method 1
  // return <React.Fragment>
  //   <h1>Alps of Mountains</h1>
  //   <h1>Alps of Mountains</h1>
  // </React.Fragment>;

  // // Method 2
  // return <>
  //   <h1>Alps of Mountains</h1>
  //   <h1>Alps of Mountains</h1>
  // </>;

  // JSX Rules
  // 1. we have to use className for classes, but in on browser it will be replaced by class property
  // 2. We can only use tags which are closed and if someone is not then we have to self close it.

  return (
    <div className="div1">
      <i> Quantum of Solace </i>
      <br />
      <input type="text" id="ip1" />
      <Nested1 />
      {/* {Nested2()} // Works but not good practise */}
      <Nested2 />
    </div>
  );
}
const Nested1 = () => <p>first Cmp</p>; // Implicit return
const Nested2 = () => {
  // Explicit return
  return <p>Second Cmp</p>;
};
// We in an applcation we have one root component named 'app.js' by convention and all other components nested inside it.

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(Hello()); // Works but not good practise
root.render(<Hello />);

// Useful extension for react development
// 1. Auto Rename Tag
// 2. Highlight Matching Tag
// 3. ES7 Snippets

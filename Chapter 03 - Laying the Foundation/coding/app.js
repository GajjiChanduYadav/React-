
import React from 'react';
import ReactDOM from 'react-dom/client';

// creating react element using core react
// 1. React.createElement(it creates an react element)
// 2. ReactElement(it is nothing but an js object)
// 3. When we render this object it will converted to html element.
// *  React.createElement => ReactElement(object) => render(object)

const heading = React.createElement("h1",{id:"parent"},"hello world");
console.log(heading);// object

// using jsx

/**
 * jsx => JSX is a JavaScript Syntax which is easier to create React Elements
 * It is not Html in js
 * It is HTML like syntax(it looks like html).
 */

const jsxHeading = <h1 id="heading">Namaste React Using JSX🚀🙏</h1>;
console.log(jsxHeading);

/**
 * <h1 id="heading">Namaste React Using JSX🚀</h1> this is not a pure javascript
 * js does not comes with jsx build inside it, "js engine" does not understand "jsx".
 * js engine understand ES8 or ECMA script language. 
 * root.render(jsxHeading); but we render the object content is displaed on the browser,but how? js engine doe not understand jsx?
 * Parcel will take care of this. Parcel manages a package called "Babel"
 * Babel is a js compiler
 * what it will do means, it "Transpiled" the code before it reaches "JS engine".
 * " Transpiled " : it converts the code into js understandale code or react understandable or browser understandable code.
 * JSX => Transpiled to React.createElement => ReactElement(js object) => will be converted to HTMLElement on render(object).
 * 
 */

// if we are writing jsx in multiple lines we have to use paranthesis().
// Because Babel needs to understand where jsx is starting and ending.

const jsx = (
    <h1 id="head">
        Namaste  
    </h1>
);


// Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions.

// 1. Class Based Component - Old way of writing React Components.
// 2. Functional Components - New way of writing React Components.

// in react component name should start with capital letter.

// we are using functoinal components
// functional component: It is a normal javascript fn which returns some piece of jsx code or react element.

 const HeadingComponent = () => <h1>Namaste React from Functional Component</h1>;

 //................... OR ...............................................

 const HeadingComponent1 = () => (
    <h1 className="heading">
    Namaste React from Functional Component1 🚀</h1>
   );

//............................... OR ..............................

const HeadingComponent2 = () => {
       return (
         <div className="container">
          <h1>Namaste React from Functional Component2 🙏</h1>
        </div>
      );
     };

// how to render react component

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root .render(< HeadingComponent2/>);

// how to convert react element to react component

 
// ===== React Element =====

    const headingElement = (
      <h1 className="heading">
      Namaste React from React Element
      </h1>
    );
// ===== React Component =====

    const HeadingComponent3 = () => (
      <h1 className="heading">
      Namaste React from React Component
      </h1>
    );

// by just changing react element name of 1st letter to capital and include this () =>.

// ............... how to nest a componest inside another component .....................

// Component Composition in React : nesting an component inside another component is called Component Composition.

const Title =  () => {
      return <h1 className="heading">Namaste React using JSX😄</h1>;
    };

    const ComponentComposition = () => {
          return (
            <div className="container">
              <Title/>  
             <h1>Namaste React from  Component Composotion</h1>
           </div>
          );
        };

// const child = ReactDOM.createRoot(document.getElementById("child"));
// child .render(< ComponentComposition/>);       

// we can write <Title/> (or) <Title></Title> both are same and we can write any no.of times.

// normal JS varibles 
const name = 'Chandu';

// React Element inside JSX
const element = <span>React Element Using jsx</span>;

// * Note: JSx prevents Crsos-Site-Scripting Attacks for you -> means, JSX "Sanitizes" all the code written inside it. It is automatically taken care by Jsx.
// {} => inside this we can write any js code.

const HeadingComponent4 = () => {
  return (
     <div className="container">
      {/* {name} -> writing normal JS variables inside JSX */}
       <h2>{name}</h2>
       {element}
       {20+23}
       <h1>Namaste React from Functional Component4 🚀</h1>
     </div>
  );
 };

 //  we can call Component inside JSX in between {}, because a Functional component at the end of the day is a JavaScript Function. So we can Call the function inside JSX .

 const Title2 = function () {
    return <h1 className="title">Namaste React using fn component</h1>;
  };

  const HeadingComponent5 = () => {
       return (
       <div className="container">
         {Title2()}
         <Title2 />              
         <Title2></Title2>      
          <h1>Namaste React from Functional Component</h1>
        </div>
       );
     };
 
 // The above three are same thing  {Title2()} , <Title2></Title2> ,  <Title2 /> 
 
 // * Note: JSX Element must have only one Parent Element

 /**
  *  (
        <div></div>
        <div></div>
    )
         This will give an error 
(
  <div>
    <div></div>
    <div></div>
  </div>
)
it have one div parent element but this div will be added to the dom.

                                         (or)
                     
we can use React Fragment(<React.Fragment>...</React.Fragment> (or) <>...</>) to wrap JSx Elements 

(<React.Fragment>...</React.Fragment> (or) <>...</>) these behaves like an empty tag ,it doesn't appear on the DOM.                                        

 (
    <React.Fragment>
      <div></div>
      <div></div>
    </React.Fragment>
  )
  So, if we want to create nested JSX Element Structure we, either wrap all those elements insdie a parent element (or) we can use React Fragment Syntax(<>...</>) to achieve the same thing.
                                          
  */

  const HeadingComponent6 = () => (
      <div>
        <div id="container1">
         <h1 className="heading">Namaste React</h1>
       </div>
       <div id="container2"></div>
     </div>
  );

  //     (or)

  const HeadingComponent7 = () => (
       <React.Fragment>
         <div id="container3">
           <h1 className="heading">Namaste React </h1>
         </div>
         <div id="container4"></div>
       </React.Fragment>
     );

//    (or)

const HeadingComponent8 = () => (
      <>
        <div id="container5">
          <Title />
          <h1 className="heading">Namaste React 🚀 😄</h1>
        </div>
        <div id="container6"></div>
      </>
  );

//const root2 = ReactDOM.createRoot(document.getElementById('root'));

//root2.render(<HeadingComponent8 />);


             


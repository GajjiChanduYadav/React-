
## Namaste React Course by Akshay Saini
# Chapter 03 - Laying the Foundation

## Q: What is `JSX`?
A: JSX stands for JavaScript XML. JSX is a syntax extension for JavaScript that allows you to write **HTML-like code** in your JavaScript files.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
 It provides a way to define the structure and content of your components in a more declarative way, which can make your code more readable and easier to understand.

### Example 1 using JSX:
```
const element = <h1>React Element Using JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById(''root'));
root.render(element);
```
### Example 2 Without JSX:
```
const element = React.createElement(''h1'', {}, ''React Element without JSX!'');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
```


## Q: Superpowers of `JSX`.
A: **JSX (JavaScript XML)** is an extension to JavaScript syntax that allows developers to write HTML-like code in their JavaScript files. Some of the superpowers of JSX are:

1. **Easy integration of HTML and JavaScript:** JSX allows developers to write HTML-like code directly in their JavaScript files, making it easy to integrate HTML and JavaScript in the same file. This reduces the need to switch between different files and languages, resulting in faster development and fewer errors.

2. **Extensibility:** JSX is highly extensible and can be used with other libraries and frameworks such as React, Vue, and Angular. This allows developers to leverage the power of JSX while still using their preferred libraries and frameworks.

3. **Type checking:** JSX can be statically analyzed and type-checked using tools such as TypeScript or Flow. This helps developers catch errors before they happen and ensures that their code is more reliable and maintainable.

4. **Improved readability:** JSX code is often easier to read than regular JavaScript code, especially when it comes to rendering complex user interfaces. This is because JSX code looks more like HTML, which is a language that many developers are already familiar with.


## Q: Role of `type` attribute in script tag? What options can I use there?
A: The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.
### `type` attribute can be of the following types:
- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
    ### Syntax
    ```
    <script type="text/javascript"></script>
    ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. 
The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```

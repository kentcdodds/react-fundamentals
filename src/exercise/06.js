// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

  /** 
   * Calling preventDefault() during any stage of event flow cancels the event,
   * meaning that any default action normally taken by the implementation as a
   * result of the event will not occur.
   * https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
   */

  /**
   * IMPORTANT NOTE:
   * Read through https://react.dev/learn/keeping-components-pure for KEY concepts.
   */

  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // - Base Solution -
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // const username = event.target.elements[0].value; <- Index approach
  //   // const username = event.target[0].value; <- Index approach
  //   // const username = event.target.elements.usernameInputId.value; <- Id approach
  //   const username = event.target.elements.usernameInput.value; // <- Name approach

  //   onSubmitUsername(username);
  // }

  // - Extra Credit 01 -
  const inputRef = React.useRef(null);
  // First, declare a ref object with an initial value of null

  const handleSubmit = (event) => {
    // The default behavior of a form submission is to make an HTTP GET (POST?) request to the
    // current URL with the value and the name of the inputs as the values and keys of query
    // parameters in the URL. This will cause a page refresh.
    event.preventDefault();
    // This event's type is SyntheticEvent, which is a wrapper around the native event created
    // by React for performance reasons. It has pretty much the same properties and methods
    // as the native event, but it's not the native event itself. To access the native event, 
    // you can use the event.nativeEvent property.

    const username = inputRef.current.value;
    // Third, access the value of the <input> by using the `current` property of your ref object
    // This is a React specific way to access the value of the <input> element.

    /**
     * After React creates the DOM node and puts it on the screen, React will set
     * the `current` property of your ref object to that DOM node.
     * Now you can access the <input>’s DOM node.
     * https://react.dev/reference/react/useRef#manipulating-the-dom-with-a-ref
     * 
     * The useRef Hook returns an object with a single property called current.
     * Initially, myRef.current will be null. When React creates a DOM node for this <div>,
     * React will put a reference to this node into myRef.current. You can then access this
     * DOM node from your event handlers and use the built-in browser APIs defined on it.
     * https://react.dev/learn/manipulating-the-dom-with-refs
     * 
     * By default, React does not let a component access the DOM nodes of other components.
     * Not even for its own children! This is intentional. Refs are an escape hatch that
     * should be used sparingly. Manually manipulating another component’s DOM nodes makes
     * your code even more fragile.
     * Instead, components that want to expose their DOM nodes have to opt in to that behavior.
     * A component can specify that it “forwards” its ref to one of its children.
     * 
     * In design systems, it is a common pattern for low-level components like buttons, inputs,
     * and so on, to forward their refs to their DOM nodes. On the other hand,
     * high-level components like forms, lists, or page sections usually won’t expose
     * their DOM nodes to avoid accidental dependencies on the DOM structure.
     * https://react.dev/learn/manipulating-the-dom-with-refs#accessing-another-components-dom-nodes
     * 
     * Refs are an escape hatch. You should only use them when you have to “step outside React”.
     * Common examples of this include managing focus, scroll position, or calling browser APIs
     * that React does not expose.
     * https://react.dev/learn/manipulating-the-dom-with-refs#best-practices-for-dom-manipulation-with-refs
     */
    onSubmitUsername(username);
  };

  // - Extra Credit 02 -
  // const [inputError, setInputError] = React.useState(null);

  // - Extra Credit 03 -
  const [username, setUsername] = React.useState('');

  const handleChange = (event) => {
    const usernameValue = event.target.value;

    // - Extra Credit 02 -
    // const isValid = usernameValue === usernameValue.toLowerCase();

    // setInputError(isValid ? null : 'Username must be lower case')

    // - Extra Credit 03 -
    // Controlled inputs allows us to prevent the user to enter invalid values.
    // They specifically need an onChange handler to update the state of the input, otherwise
    // it would be read-only.
    setUsername(usernameValue.toLowerCase());
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div>
        <label htmlFor='usernameIputId'>Username:</label>
        {/** Second, pass your ref object as the ref attribute to the JSX of the DOM node you want to manipulate */}
        <input
          ref={inputRef}
          type="text"
          name='usernameInput'
          id='usernameInputId'
          value={username}
          onChange={e => handleChange(e)}
        />
        {/** - Extra Credit 02 - */}
        {/** inputError && (
          <div role="alert" style={{ color: 'red' }}>
            {inputError}
          </div>
        )*/}
      </div>
      <button type="submit">Submit</button>
      {/** - Extra Credit 02 - */}
      {/** <button type="submit" disabled={Boolean(inputError)}>Submit</button> */}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

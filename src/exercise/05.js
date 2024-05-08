// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

// - Base Solution -
// const smallBoxProps = {
//   className: 'box box--small',
//   style: {
//     backgroundColor: 'lightblue',
//     fontStyle: 'italic',
//   },
// };

// const mediumBoxProps = {
//   className: 'box box--medium',
//   style: {
//     backgroundColor: 'pink',
//     fontStyle: 'italic',
//   },
// };

// const largeBoxProps = {
//   className: 'box box--large',
//   style: {
//     backgroundColor: 'orange',
//     fontStyle: 'italic',
//   },
// };

// JSX focuses on property names rather than HTML attributes, using objects rather than strings (just like the DOM).
// It later gets compiled to the actual HTML attributes in string format.
// const smallBox = <div {...smallBoxProps}>small lightblue box</div>
// const mediumBox = <div {...mediumBoxProps}>medium pink box</div>
// const largeBox = <div {...largeBoxProps}>large orange box</div>

// NOTE: in chrome devtools, every element is referenced with a symbol like $0, $1, $2, etc.
// You can use this symbol to select the element in the console and inspect it.

// - Extra Credit 01 -
// const Box = ({ className: modifier = '', style, children }) => (
//   // <div className={`box ${modifier}`} style={{ ...style, fontStyle: 'italic' }}>
//   // NOTE:
//   // Its not a good practice to enforce props over the spread props (see previous line).
//   // Its better to set default props first and then override them if necessary spreading the props.
//   <div className={`box ${modifier}`} style={{ fontStyle: 'italic', ...style }}>
//     {children}
//   </div>
// );

// const smallBoxStyles = {
//   backgroundColor: 'lightblue'
// };

// const mediumBoxStyles = {
//   backgroundColor: 'pink'
// };

// const largeBoxStyles = {
//   backgroundColor: 'orange'
// };

// const smallBox = <Box className="box--small" style={smallBoxStyles}>small lightblue box</Box>;
// const mediumBox = <Box className="box--medium" style={mediumBoxStyles}>medium pink box</Box>;
// const largeBox = <Box className="box--large" style={largeBoxStyles}>large orange box</Box>;

// - Extra Credit 02 -
const Box = ({ size = '', style, children }) => (
  <div className={`box box--${size}`} style={{ fontStyle: 'italic', ...style }}>
    {children}
  </div>
);

const smallBoxStyles = {
  backgroundColor: 'lightblue'
};

const mediumBoxStyles = {
  backgroundColor: 'pink'
};

const largeBoxStyles = {
  backgroundColor: 'orange'
};

const smallBox = <Box size="small" style={smallBoxStyles}>small lightblue box</Box>;
const mediumBox = <Box size="medium" style={mediumBoxStyles}>medium pink box</Box>;
const largeBox = <Box size="large" style={largeBoxStyles}>large orange box</Box>;

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App

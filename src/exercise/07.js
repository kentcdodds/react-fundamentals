// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react'

const allItems = [
  {id: 'apple', value: '🍎 apple'},
  {id: 'orange', value: '🍊 orange'},
  {id: 'grape', value: '🍇 grape'},
  {id: 'pear', value: '🍐 pear'},
]

function App() {
  const [items, setItems] = React.useState(allItems)

  function addItem() {
    const itemIds = items.map(i => i.id)
    setItems([...items, allItems.find(i => !itemIds.includes(i.id))])
  }

  function removeItem(item) {
    setItems(items.filter(i => i.id !== item.id))
  }

  return (
    <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul>
        {items.map(item => (
          // React's key prop gives you the ability to control component instances.
          //https://kentcdodds.com/blog/understanding-reacts-key-prop
          /** 
           * When the JSX changes, React compares the newly generated React elements with the previous ones.
           * In between these "snapshots", any sort of changes could have happened from state A to state B.
           * React uses the keys identify wich elements changed and how they changed.
           * If a key is not provided, React will use the index of the array items as the keys.
           * This causes troubles, because diferent elements could share the same index across different states.
           * Thats why not providing a key, or setting it to the index of the array's items
           * could cause unpredictable behavior and performance issues.
           * See https://epicreact.dev/why-react-needs-a-key-prop for more.
           */
          // 🐨 add a key prop to the <li> below. Set it to item.id
          <li key={item.id}>
            <button onClick={() => removeItem(item)}>remove</button>{' '}
            <label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
            <input id={`${item.id}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

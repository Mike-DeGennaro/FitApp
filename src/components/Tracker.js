import React, { useEffect, useState } from 'react';
import './Tracker.css';


const Item = ({ item, removeItem }) => { 
  return ( <div>
       <span>{item}</span>
       <button className='button' onClick={() => removeItem(item)}>X</button>
        </div> );
};

const ItemList = ({ items, removeItem }) => {
  return (
    <div className="items-container">
      <ul className='note'>
        {items.map((item) => (
          <li className='listItem'>
            <Item key={item} item={item} removeItem={removeItem}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AddItemForm = ({ addItem }) => {
  const [item, setItem] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
    setItem('');
  };

return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className='input' value={item} onChange={(e) => setItem(e.target.value)} />
        <button className='addButton'>Add Food</button>
      </form>
    </div>
  );
};




function Tracker() {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    // assuming no duplicates for demo purposes
    setItems([...items, item]);
  };

const removeItem = (itemToBeDeleted) => {
    setItems(items.filter((item) => itemToBeDeleted !== item));
  };

useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
    }
  }, []);

useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);


return (
    <div className="App">
      <header className="App-header">
        <h3>Keep tabs on your nutrition for the day</h3>
        <AddItemForm addItem={addItem} />
        <div className='container'>
        <ItemList items={items} removeItem={removeItem} />
        </div>
      </header>
    </div>
  );
}

export default Tracker;
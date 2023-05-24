import React, {useState} from 'react';
import {View, Text, FlatList, TextInput, Button} from 'react-native';
import Header from './components/Header';
import ShoppingItem from './components/ShoppingItem';

function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([
    {id: 1, item: 'Milk'},
    {id: 2, item: 'Coffee'},
    {id: 3, item: 'Butter'},
    {id: 4, item: 'Bread'},
  ]);

  function deleteItem(id) {
    const updatedItems = [...items].filter(i => {
      if (i.id !== id) {
        return true;
      }
    });

    setItems(updatedItems);
  }

  function addItem() {
    setItems(prevItems => [
      ...prevItems,
      {id: Math.random() * 1000, item: text},
    ]);
    setText('');
  }

  return (
    <View>
      <Header />
      <TextInput
        value={text}
        onChangeText={text => setText(text)}
        style={{
          borderColor: 'grey',
          borderWidth: 2,
          margin: 10,
          borderRadius: 20,
        }}
      />
      <Button title="Add To List" onPress={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ShoppingItem id={item.id} item={item.item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

export default App;

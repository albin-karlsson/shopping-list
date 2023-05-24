import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function ShoppingItem({id, item, deleteItem}) {
  return (
    <View style={style.item}>
      <Text style={style.itemText}>{item}</Text>
      <TouchableOpacity
        onPress={() => {
          deleteItem(id);
        }}>
        <Text style={style.deleteBtn}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  item: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    color: 'grey',
    fontSize: 25,
  },
  deleteBtn: {
    color: 'red',
    fontSize: 25,
  },
});

export default ShoppingItem;

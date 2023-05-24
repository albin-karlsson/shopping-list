import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header() {
  return (
    <View style={style.header}>
      <Text style={style.text}>Shopping List</Text>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: 'lightpink',
    justifyContent: 'center',
    height: 100,
  },
  text: {
    color: 'red',
    fontSize: 50,
  },
});

export default Header;

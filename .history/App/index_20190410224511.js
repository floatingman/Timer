import React from 'react'
import {StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07121B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 10,
    borderColor: '#89AAFF',
  },
  buttonText: {
    fontSize: 45,
    color: '#89AAFF',
  },
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TouchableOpacity onPress={() => null} style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

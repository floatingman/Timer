import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native'

const screen = Dimensions.get('window')

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
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStop: {
    borderColor: '#FF851B',
  },
  buttonText: {
    fontSize: 45,
    color: '#89AAFF',
  },
  buttonTextStop: {
    color: '#FF851B',
  },
  timerText: {
    color: '#fff',
    fontSize: 90,
  },
})

const formatNumber = number => `0${number}`.slice(-2)

const getRemaining = time => {
  const minutes = Math.floor(time / 60)
  const seconds = time - minutes * 60
  return {minutes: formatNumber(minutes), seconds: formatNumber(seconds)}
}

export default class App extends React.Component {
  state = {
    remainingSeconds: 5,
  }

  interval = null

  componentDidUpdate(prevProp, prevState) {
    if (this.state.remainingSeconds === 0 && prevState.remainingSeconds !== 0) {
      this.stop()
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  start = () => {
    this.setState(state => ({
      remainingSeconds: state.remainingSeconds - 1,
    }))

    this.interval = setInterval(() => {
      this.setState(state => ({
        remainingSeconds: state.remainingSeconds - 1,
      }))
    }, 1000)
  }

  stop = () => {
    clearInterval(this.interval)
    this.interval = null
    this.setState({remainingSeconds: 5})
  }

  render() {
    const {minutes, seconds} = getRemaining(this.state.remainingSeconds)

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.timerText}>{`${minutes}:${seconds}`}</Text>
        <TouchableOpacity onPress={this.start} style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.stop} style={styles.button}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

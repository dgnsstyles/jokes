import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './components/Input'
import Tinder from './components/Tinder'

export default class App extends React.Component {
  state = {
    value: '',
    // array
    jokes: [],
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Input
          updateJokes={(jokes) => this.setState({ jokes: jokes })}
          value={this.state.value}
          onChange={(value) => this.setState({ value: value })}
        />
        <Tinder 
        jokes={this.state.jokes}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

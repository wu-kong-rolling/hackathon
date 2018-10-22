import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>Macgyver Hackathon</Text>
        <Text style={{color: 'white'}}>Logo Needed. Thank you!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3ec9cb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ProgressBarAndroid } from 'react-native';
import styles from './App.Styles';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={100} color="#4885ed"/>
      </View>
    );
  }
}

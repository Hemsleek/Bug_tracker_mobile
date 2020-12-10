// import { StatusBar: ExpoStatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux'
import store from './app/store'

import BugTracker from './app/components/BugTracker'


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor='gray' barStyle="dark-content" />
        <BugTracker />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({

});

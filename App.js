// import { StatusBar: ExpoStatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import BugTracker from './app/components/BugTracker'


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor='gray' barStyle="dark-content" />
      <BugTracker />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

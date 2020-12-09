import React from 'react'
import { StyleSheet, Text, View, Platform, TextInput } from 'react-native'
import { AddIcon } from './icons/bugsIcon'

export default function BugTracker() {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.headingText}>Bug tracker</Text>
            </View>
            <View style={styles.form}>
                <TextInput underlineColorAndroid='transparent' allowFontScaling={true} style={styles.formInput} />
                <AddIcon />
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Platform.OS == 'andriod' ? StatusBar.currentHeight : 0
      },
      heading: {
        backgroundColor: '#000',
        paddingVertical: 25,
        paddingLeft: 10,
        borderBottomColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 2
    
      },
      headingText: {
        color: '#fff',
        fontSize: 30
      },
      form: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginTop: 10
    
    
      },
      formInput: {
        flex: 1,
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 2,
        marginRight: 4,
        paddingHorizontal: 8,
        borderRadius: 5,
        fontSize: 17,
    
      }
})

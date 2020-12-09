import React from 'react'
import { StyleSheet, Text, View, Platform, TextInput,ScrollView } from 'react-native'
import { AddIcon } from './icons/bugsIcon'

export default function BugTracker() {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.headingText}>Bug tracker</Text>
            </View>
            <View style={styles.form}>
                <TextInput underlineColorAndroid='transparent' 
                allowFontScaling={true} style={styles.formInput}
                placeholder="Found a new bug?"
                />
                <AddIcon />
            </View>
            <View style={styles.bugs}>
                <ScrollView showsVerticalScrollIndicator={false} >

                </ScrollView>
            </View>
            <View style={styles.info}>
                <Text style={styles.infoTexts}>Total (67)</Text>
                <Text style={[styles.infoTexts, styles.infoText]}>Unresolved (23)</Text>
                <Text style={styles.infoTexts}>Resolved (20)</Text>
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
        backgroundColor: 'green',
        paddingVertical: 25,
        paddingLeft: 15,
        borderBottomColor: 'gray',
        borderStyle: 'solid',
        borderBottomWidth: 2
    
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
        marginRight: 5,
        paddingHorizontal: 8,
        borderRadius: 3,
        fontSize: 17,
    
      },
      bugs:{
          flex:1
      },
      info:{
          flexDirection:'row',
          paddingVertical:20,
          alignItems:'center',
          paddingLeft:15,
          backgroundColor:'#f2f2f2' ,
      },
      infoTexts:{
        fontSize:16,
        marginRight:6
           
      },
      infoText:{
        borderLeftColor: 'gray',
        borderRightColor:'gray',
        borderRightWidth: 2, 
        borderLeftWidth: 2, 
        borderStyle: 'solid',
        paddingHorizontal:8
      }

})

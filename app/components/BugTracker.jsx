import React from 'react'
import { StyleSheet, Text, View, Platform, TextInput,ScrollView } from 'react-native'
import { AddIcon , BugIcon , DeleteIcon , CheckedIcon } from './icons/bugsIcon'

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
                    <View style={styles.unresolvedBugs}>
                        <Text style={styles.bugOption}>Unresolved</Text>
                        <View style={styles.bug}>
                            <BugIcon />
                            <Text style={[styles.bugText , {color:'red'}]}>Astalavista 👾</Text>
                            <DeleteIcon />
                        </View>
                    </View>
                    <View style={styles.resolvedBugs}>
                        <Text style={styles.bugOption}>Resolved</Text>
                        <View style={styles.bug}>
                            <CheckedIcon />
                            <Text style={[styles.bugText , {color:'green'}]}>Hey babe,i'm chairman 😎</Text>
                            <DeleteIcon />
                        </View>
                    </View>
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
        backgroundColor:'#f9f9f9',
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
          flex:1,
          marginVertical:12,
          paddingHorizontal:15,
          paddingRight:25
      },
      unresolvedBugs: {
          
      },
      resolvedBugs:{},
      bugOption:{
          textDecorationColor:'green',
          textDecorationStyle:'solid',
          textDecorationLine:'underline',
          fontSize:17,
          marginVertical:15,
          
          
      },
      bug:{
          flexDirection:'row',
          alignItems:'center',
          marginBottom:8

      },
      bugText:{
          flex:1,
          marginHorizontal:10,
          fontSize:18
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

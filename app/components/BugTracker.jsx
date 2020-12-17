import React, { useState } from 'react'
import { StyleSheet, Text, View, Platform, TextInput,ScrollView, StatusBar,TouchableNativeFeedback , TouchableOpacity } from 'react-native'
import { AddIcon , BugIcon , DeleteIcon , CheckedIcon } from './icons/bugsIcon'
import {addBug, removeBug, toggleResolveBug } from '../store/actionCreators'

import {useDispatch , useSelector} from 'react-redux'

export default function BugTracker() {
    const [newBug , setNewBug] = useState('')

    const dispatch = useDispatch()
    const bugs = useSelector( state => state)
    const totalBugs = useSelector( state => state.length)

    const unresolvedBugs = bugs.filter(bug => !bug.resolved)
    const resolvedBugs = bugs.filter(bug => bug.resolved)

    const generateId = () => Math.random().toString(36).substr(2,4)

    const Touchable =
            Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;


    const handleSubmit = () =>{
        const id = generateId()
        const description = newBug.trim()
         
        if(!description) return null

        dispatch(addBug(id , description))
        setNewBug('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.headingText}>Bug tracker</Text>
            </View>
            <View style={styles.form}>
                <TextInput underlineColorAndroid='transparent' 
                allowFontScaling={true} style={styles.formInput}
                placeholder="Found a new bug?"
                value={newBug}
                onChangeText={setNewBug}
                />
                <AddIcon onPress={handleSubmit} />
            </View>
            <View style={styles.bugs}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={styles.unresolvedBugs}>
                        <Text style={styles.bugOption}>Unresolved</Text>
                       
                        {
                            unresolvedBugs.length?
                             (unresolvedBugs.map(bug =>
                            
                                <View key={bug.id} style={styles.bug}>
                                    <Touchable 
                                      onPress={() => dispatch(toggleResolveBug(bug.id))}
                                     style={styles.touchable}>
                                        <BugIcon />
                                    </Touchable>
                                    <Text  style={[styles.bugText , {color:'red'}]}>{bug.description}
                                    </Text>
                                    
                                    <Touchable
                                     onPress={() => dispatch(removeBug(bug.id))} 
                                     style={styles.touchable}>
                                        <DeleteIcon />
                                    </Touchable>

                                </View>
                                )): (<Text style={styles.empty}>List Empty</Text>)
                        }
                        
                    </View>
                    <View style={styles.resolvedBugs}>
                        <Text style={styles.bugOption}>Resolved</Text>
                        
                        {
                            resolvedBugs.length?
                             (resolvedBugs.map(bug =>
                                <View key={bug.id} style={styles.bug}>
                                    <Touchable
                                      onPress={() => dispatch(toggleResolveBug(bug.id))} 
                                     style={styles.touchable}>
                                        <CheckedIcon />
                                    </Touchable>

                                    <Text style={[styles.bugText , {color:'green'}]}>{bug.description}
                                    </Text>

                                    <Touchable  
                                     onPress={() => dispatch(removeBug(bug.id))}  
                                     style={styles.touchable} >
                                        <DeleteIcon  />
                                    </Touchable>
                                </View>
                                )):(<Text style={styles.empty}>List Empty</Text>)
                        }
                    </View>
                </ScrollView>
            </View>
            <View style={styles.info}>
                <Text style={styles.infoTexts}>Total ({totalBugs})</Text>
                <Text style={[styles.infoTexts, styles.infoText]}>Unresolved ({unresolvedBugs.length})</Text>
                <Text style={styles.infoTexts}>Resolved ({resolvedBugs.length})</Text>
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
        backgroundColor: '#000',
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
          textDecorationStyle:'solid',
          textDecorationLine:'underline',
          fontSize:17,
          marginVertical:15,
          
          
      },
      bug:{
          flexDirection:'row',
          alignItems:'center',
          marginBottom:20

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
      },
      empty:{
          color:'gray',
          marginLeft:5
      },
      touchable: {
          padding:30,

      }
    
})

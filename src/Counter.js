import { StyleSheet, Text, View, Button } from 'react-native'
import React,{useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {addition, subtraction} from './store/actions'

const Counter = (props) => {
    //we wouldn't need usestate anymore to hold state
    const data = useSelector((state) => state.counter);
    const dispatch = useDispatch();

  return (
    <View style={styles.container}>
        <Button title='Add' onPress={()=> dispatch(addition(2))}/>
      <Text>{data}</Text>
      <Button title='Subtract' onPress={()=> dispatch(subtraction())}/>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
})
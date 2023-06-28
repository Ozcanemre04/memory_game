import React from 'react'
import { View,Pressable,StyleSheet,Text } from 'react-native'

export default function Card({card,isTurnedOver,onPress}) {
  return (
    <Pressable onPress={onPress} style={isTurnedOver?styles.cardUp : styles.cardDown}>
    {isTurnedOver?(
      <Text style={styles.text}>{card}</Text>
      ):(
        <Text style={styles.text}>?</Text>
      )
  }
    </Pressable>
  )
}


const styles = StyleSheet.create({
  cardUp:{
    width:100,
    height:100,
    margin:10,
    backgroundColor:'#1e293b',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:25,
  },
  cardDown:{
    width:100,
    height:100,
    margin:10,
    backgroundColor:'#1e293b',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:10,
    borderColor:'#334155',
    borderRadius:25,
  },
  text:{
    fontSize:46,
    color:'#334155'
  }
})
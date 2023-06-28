import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from './components/Card';


const cards = [
  // "🥹",
  // "🗣️",
  // "🦷",
  // "🍑",
  // "🌪️",
  // "🪝",
  "🔑",
  "🐷",
  "🌎",
  "⚛️",
  "🥕",
  "🥑",
];


export default function App() {
   const [board,setBoard] = useState([...cards,...cards].sort(()=> Math.random() - 0.5));
   const [selectedCards,setSelectedCards] = useState([])
   const [matchedCards,setMatchedCards] = useState([])

   console.log(matchedCards)
   const handleTapCard = (index)=>{
      if(selectedCards.length >= 2 || selectedCards.includes(index)) return;
      setSelectedCards([...selectedCards,index])
    }
    useEffect(()=>{
      if(selectedCards.length < 2) return;
      if(board[selectedCards[0]] === board[selectedCards[1]]){
      setMatchedCards([...matchedCards,...selectedCards])
      setSelectedCards([])
    }
    else{
      const timeoutId = setTimeout(()=> setSelectedCards([]),1000);
      return ()=> clearTimeout(timeoutId)
    }
   },[selectedCards])

   const didPlayerWin = () => matchedCards.length === board.length;
   const resetGame=()=>{
    setMatchedCards([])
    setSelectedCards([])
    board.sort(()=> Math.random() - 0.5)
   }
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Memory Game</Text>
    <View style={styles.board}>
    {board.map((card,index)=>{
      const isTurnedOver = selectedCards.includes(index) || matchedCards.includes(index);
      return <Card key={index} card={card} onPress={()=>{handleTapCard(index)}} isTurnedOver={isTurnedOver}/>
      
    })}
    </View>
    {didPlayerWin()?(
      <View>
        <Text style={styles.text}>you won</Text>
        <Button title='retry' onPress={resetGame} color='#334155'/>
      </View>
      ) : (<View><Text></Text></View>)}
    <StatusBar style='light'/>
    </View>  
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#0f172a",
    alignItems: "center",
    justifyContent:'center',
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "snow",
  },
  board:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    width:'80%',
  },
  text:{
    fontSize:32,
    color:'white',
  }
})




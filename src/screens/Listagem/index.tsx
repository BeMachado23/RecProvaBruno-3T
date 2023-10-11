import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

export function Listagem() {

const footballPlayers = [
  {
    name: "Cristiano Ronaldo",
    position: "Forward",
    age: 36,
  },
  {
    name: "Lionel Messi",
    position: "Attacking Midfielder",
    age: 34,
  },
  {
    name: "Neymar Jr.",
    position: "Forward",
    age: 29,
  },
  {
    name: "Kylian Mbappé",
    position: "Forward",
    age: 23,
  },
  {
    name: "Sergio Ramos",
    position: "Defender",
    age: 35,
  },
  {
    name: "Kevin De Bruyne",
    position: "Midfielder",
    age: 30,
  },
  {
    name: "Robert Lewandowski",
    position: "Forward",
    age: 32,
  },
  {
    name: "Virgil van Dijk",
    position: "Defender",
    age: 30,
  },
  {
    name: "Luka Modric",
    position: "Midfielder",
    age: 35,
  },
  {
    name: "Erling Haaland",
    position: "Forward",
    age: 21,
  },
];

const renderItem = ({ item }) => (
<View style={{marginBottom:20, backgroundColor:"#00B612", padding: 20, borderRadius: 8}}>
  <Text style={styles.text}>{item.name}</Text>
  <Text style={styles.text}>{item.position}</Text>
  <Text style={styles.text}>{item.age}</Text>
  </View>
)

 return(
    <View style={styles.container}>
       <Text style={styles.title}>Lista de jogadores</Text>
      <FlatList 
      style={styles.lista}
      data={footballPlayers}
      renderItem={renderItem}
      ></FlatList>

    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems:'center',
    backgroundColor: "white",


  },
  title:{
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 30,
  },
  text:{
    fontSize: 14,
      
  },
  lista:{
    marginBottom: 40
  },
  buttonTxt:{

  },
  button:{

  }

});
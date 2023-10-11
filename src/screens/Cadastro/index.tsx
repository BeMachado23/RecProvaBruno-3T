import * as React from 'react-native'
import { useState } from 'react';
import {  Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export function Cadastro() {
  const navigation = useNavigation();

  const [isVisible, setIsVisible] = useState(false);

  const [tecnico, setTecnico] = useState({
    nome: '',
    idade: '',
    nacionalidade: '',
    experiencia: '',
  });

  function handleInputChange(field: string, value: string) {
    setTecnico({
      ...tecnico,
      [field]: value,
    });
  }

  function cadastrar() {
    setIsVisible(true)
  }

  function lista() {
    navigation.navigate('Listagem')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Preencha as informações do Técnico</Text>
      
      <Text style={styles.textInput}>Nome</Text>
      <TextInput
        style={styles.input}
        value={tecnico.nome}
        onChangeText={(text) => handleInputChange('nome', text)}
      />

      <Text style={styles.textInput}>Idade</Text>
      <TextInput
        style={styles.input}
        value={tecnico.idade}
        onChangeText={(text) => handleInputChange('idade', text)}
      />

      <Text style={styles.textInput}>Nacionalidade</Text>
      <TextInput
        style={styles.input}
        value={tecnico.nacionalidade}
        onChangeText={(text) => handleInputChange('nacionalidade', text)}
      />

      <Text style={styles.textInput}>Tempo de experiencia</Text>
      <TextInput
        style={styles.input}
        value={tecnico.experiencia}
        onChangeText={(text) => handleInputChange('experiencia', text)}
      />
{isVisible && (
<View style={styles.lista}>
<Text style={styles.inputTxt}>Nome: {tecnico.nome}</Text>
<Text style={styles.inputTxt}>Idade: {tecnico.idade}</Text>
<Text style={styles.inputTxt}>Nacionalidade: {tecnico.nacionalidade}</Text>
<Text style={styles.inputTxt}>Experiencia em anos: {tecnico.experiencia}</Text>
</View>)}

    <TouchableOpacity style={styles.button} onPress={cadastrar}>
        <Text style={styles.buttonTxt}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={lista}>
        <Text style={styles.buttonTxt}>Ver lista de jogadores</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#90EE90',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input:{
        color: "black",
        fontSize: 15,
        width: "30%",
        padding: 9,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "whitesmoke",
        borderRadius: 5,
        marginBottom: 12
      },
      inputTxt:{
        fontSize: 14,
        width: '60%',
        color: 'black',
        marginBottom: 20
      },
      button: {
        color:"white",
        marginTop: 10,
        padding: 15,    
        textAlign: "center",
        borderRadius: 10,
        backgroundColor: "green",
        width:200,
    
      },
      buttonTxt: {
        fontFamily: "Arial",
        color: "white",
        textAlign:'center'
      },
      textInput: {
        fontSize: 16,
        width: '30%',
        marginBottom: 5,
        color: "black",
        fontWeight: 'bold'
      },
      text:{
        fontSize: 25,
        marginBottom: 50,
        fontWeight: 'bold'
      },
      lista:{

      }
})
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View, TextInput } from 'react-native';

export default function App() {
  
  function minus_count (count) {
    if (count - 1 < 0){
      return setCount(count)
    }
    else
    {
      return setCount(count-1)
    }
  }
  function reset_count (count) {

    return setCount(count=0)
  }

  function nome(nome) {
    if (nome == 0){
      return <Text> Reseted !!! </Text>
    }
    else
      return None
  }
  const [count,setCount] = useState(0);
  return (
    <View style={styles.container}>

   
      
      <Text style={styles.tex}>Quantidade de pessoas</Text>
      <Text style={styles.textzin}>{ count }</Text>

      <TouchableOpacity style={styles.butaozinpush} onPress={ ()=> setCount(count+1)}> 
        <text>+</text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.butaozinminus} onPress={ ()=> minus_count(count)}>
        <text>-</text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.butaozinresert} onPress={ ()=> reset_count(count)}>
        <text style={styles.butaozinresert_text}>Resetar</text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  butaozinresert:
  {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black",
    flexDirection: "row",
    position: "absolute",
    bottom: "0%",
    height: "5%",
    width: "100%",
  },
  butaozinresert_text:
  {
    color: "white",
  },
  textzin:
  {
    color: "white",
    fontSize: "50px",
    marginBottom: "25%",
  },
  tex:
  {
    color: "white",
  },
  butaozinpush:
  {
    backgroundColor: 'green',
    color: 'black',

    marginTop: "1%",
    marginBottom: "2px",
    paddingTop: '25px',
    paddingRight: "71px",
    paddingBottom: "25px",
    paddingLeft: "75px",
    borderRadius: "5px",
  },
  butaozinminus:
  {
    backgroundColor: 'red',
    paddingTop: '25px',
    paddingRight: "75px",
    paddingBottom: "25px",
    paddingLeft: "75px",
    borderRadius: "5px",
  }

});

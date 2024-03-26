import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View , TouchableOpacity } from 'react-native';
import { useState } from 'react';


const SignUpScreen = () => {

  const [username , setUsername] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [confirmPassword , setConfirmPassword] = useState('');
  const [validate, setValidate] = useState(false);

  const onPress = () => {
    setValidate(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up page</Text>
      <TextInput style={styles.input} placeholder="Username" onChangeText={newText => setUsername(newText)} defaultValue={username}/>
      <TextInput style={styles.input} placeholder="Email" onChangeText={newText => setEmail(newText)} defaultValue={email}/>
      <TextInput style={styles.input} placeholder="Password" onChangeText={newText => setPassword(newText)}/>
      <TextInput style={styles.input} placeholder="Confirm password" onChangeText={newText => setConfirmPassword(newText)}/>
      <TouchableOpacity onPress={onPress} style={styles.button}>
       <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
      <Text>{validate?'Successful Regestration':'please check rules '}</Text>
    </View> 
  );
}

export default SignUpScreen;

const styles = {
    container: {
      padding: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      height: '100%',
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 100,
    },
    input: {
      width: '80%',
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
  
    button: {
      backgroundColor: '#777777',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop:40
    },
    text: {
      color: 'white',
      textAlign: 'center',
      fontSize: 16,
    },
    errorMessage: {
      color: 'red',
      marginBottom: 10,
    },
  };
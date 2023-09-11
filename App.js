import { useState } from 'react';
import { StyleSheet, View, Image, TextInput, Text, Alert, TouchableHighlight } from 'react-native';

export default function App() {


    const [text, setText] = useState('');
    const [password, setPassword] = useState('')

    const handleButtonPress = () => {
      if (text.trim() === '') {
        Alert.alert("Unesite svoj Email");
      }
      else if (password.trim() === '') {
        Alert.alert("Unesite svoju Sifru");
      }
      else {
        Alert.alert("Uspesno ste se ulgovali :D")
      }
    }




  return (
    <View style={styles.container}>
     <Image source={{ uri: 'https://www.freepnglogos.com/uploads/original-samsung-logo-10.png'}}
      style={styles.image}
     />

     <View style={styles.inputs}>
     <TextInput 
     style={styles.email}
     onChangeText={(newText) => setText(newText)}
     value={text}
     placeholder='Email'
     />

     <TextInput 
     style={styles.password}
     onChangeText={(newPassword) => setPassword(newPassword)}
     value={password}
     placeholder='Password'
     secureTextEntry={true}
     
     />
     </View>


     <TouchableHighlight
     onPress={handleButtonPress}
     style={styles.button}
     underlayColor="gray"
     >
      <Text style={styles.buttonText}>Login</Text>
     </TouchableHighlight>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 70,
  },
  image: {
    width: 400,
    height: 150,
  },
  inputs: {
    height: 170,
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  email: {
    width: 300,
    textAlign: 'center',
    fontSize: 22,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    paddingVertical: 10,
  },
  password: {
    width: 300,
    textAlign: 'center',
    fontSize: 22,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
    width: 200,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  }
  
  
});



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.vieww}>
      <Text style={styles.text}>React native first app started !</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
  },
  text: {
    color: 'white',
    backgroundColor: 'blue',
    padding: 20,
    fontSize: 22,
  }
});



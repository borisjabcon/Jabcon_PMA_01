import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputText} placeholder="zadaj ulohu" />
        <Button title="Add"></Button>
      </View>
      <View style={styles.taskContainer}>
        <Text>udalosti:::</Text>
      </View>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#fb9200ff",
    width: "80%",
    padding: 10,
  },
  taskContainer: {
    flex: 3,
    borderTopWidth: 5,
    borderTopColor: "#fb9200ff",
    padding: 20,
  },

});

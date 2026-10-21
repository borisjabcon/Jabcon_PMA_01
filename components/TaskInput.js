import { Button, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function TaskInput() {
    //uchovam text
  const [taskText, setTaskText] = useState("");
   function inputTextHandler(enteredText) {
    setTaskText(enteredText);
  }
  return (
    <View style={styles.inputContainer}>
        <TextInput 
        style={styles.inputText} 
        placeholder="zadaj ulohu" 
        onChangeText={inputTextHandler}
        value="taskText"
        />
        <Button title="Add" onPress={addTaskHandler}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
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
});


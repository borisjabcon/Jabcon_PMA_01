import { StatusBar } from 'expo-status-bar';
import { Button ,Pressable, StyleSheet, Text, View, TextInput , FlatList} from 'react-native';
import { useState } from 'react';
import Item from './src/components/Item';

export default function App() {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  function inputTextHandler(text) {
    setInputText(text);
  }
  function addTextHandler() {
    let id = "id" + Math.random().toString(16).slice(2);
    setTaskList((currentTaskList) => [...currentTaskList, { id: id, value: inputText, done: false}]);
  }
  console.log(taskList);

  function handleDoneTask(itemId) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input} 
        placeholder="Zadajte ulohu" 
        onChangeText={setInputText}
      />
      <Button onPress={addTextHandler} title="ADD" />
      </View>
      <FlatList
        data={taskList}
        renderItem={({item}) => <Item item={item} handleDone={handleDoneTask} />}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: 
  {
    flex: 1, 
    alignItems: "center", 
    justifyContent: 'center', 
    flexDirection: "row",
    paddingHorizontal: 12,
  },
    taskContainer: 
    {
      backgroundColor: '',
      flex: 4, 
      borderTopWidth: 3, 
      padding: 24, 
    },
    container: {
    flex: 1,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 3,
    borderRadius: 8,
    width: "80%",
  },
  taskItem: {
    backgroundColor: 'white',
    padding: 12,
    margin :8,
    borderRadius: 8,
  },
})}
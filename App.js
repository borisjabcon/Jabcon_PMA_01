import { StatusBar } from 'expo-status-bar';
import {v4 as uuid} from 'uuid';
import { useState } from 'react';
import {StyleSheet, Text,  View } from 'react-native';

export default function App() {

//uchovam tasky a zobrazim
  const [taskList, setTaskList] = useState([]);

  function addTaskHandler() {
    const newId = uuid();
    //console.log(newId);
    setTaskList((prevTask) => [...prevTask, { id: newId, text: taskText }]);
    setTaskText("");
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.taskContainer}>
        {taskList.map((task) => (
          <View style={styles.taskItem} key={task.id}>
            <Text>{task.id}: {task.text} </Text>
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  taskContainer: {
    flex: 3,
    borderTopWidth: 5,
    borderTopColor: "#fb9200ff",
    padding: 20,
  },
  taskItem: {
    margin: 10,
    padding: 8,
    backgroundColor: "#fb9200ff",
    borderRadius: 5,
  }
});

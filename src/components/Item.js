import {Pressable, StyleSheet, Text} from 'react-native';

const Item = ({item, handleDone}) => {
    return (   
        <Pressable onPress={handleDone} style={item.done ? styles.taskContainerT : styles.taskContainer}>
            <Text>{item.title}</Text>
        </Pressable>
    );
}

export default Item;

const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: 'red',
        padding: 20,
        margin: 4,
        borderRadius:8 ,
    },
    taskContainerT: {
        backgroundColor: 'green',
        padding: 20,
        margin: 4,
        borderRadius:8 ,
    },
});


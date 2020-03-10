import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (
        <Modal visible={props.visible} animationType="slide">

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Courses"
                    style style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button
                    title="Add"
                    onPress={props.onAddGoal.bind(this, enteredGoal)}
                />
            </View>

        </Modal>

    );

};

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flex:1
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom:10
    },

});

export default GoalInput;


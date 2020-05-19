import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [newHabit, setNewHabit] = useState('')
  const [habits, setHabits] = useState([])

  const createHabit = (() => {
    const shallowHabits = habits.slice(0)
    shallowHabits.push(newHabit)
    setHabits(shallowHabits)
  })

  useEffect(() => {
    setNewHabit('')
  }, [habits, setNewHabit])

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={text => {
          console.log('text: ', text)
          setNewHabit(text)

        }}
        onSubmitEditing={createHabit}
        placeholder="Enter New Habit"
        style={styles.textInput}
        value={newHabit}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderColor: 'black',
    borderStyle: 'solid',
  }
});

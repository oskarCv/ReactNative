import React,{useState} from 'react';
import {View, 
        TextInput,
        Button,
        StyleSheet
    } from 'react-native';
const GoalInput = props =>{
    const [enteredGoal,setEnteredGoal]= useState('');
    
    const goalInputHandler= enteredGoal=>{
        setEnteredGoal(enteredGoal);
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="add your goal"
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="ADD" onPress={props.onAddGoal.bind(this,enteredGoal)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%', 
        borderBottomColor:'black',
        borderBottomWidth:2,
        padding:10
    }
});

export default GoalInput;
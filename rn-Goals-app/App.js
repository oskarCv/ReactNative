import React,{useState} from 'react';
import { 
  StyleSheet, 
  View,  
  FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [goalsList,setGoalsList]= useState([]);
  
  const addGoalHandler= goalTitle => {
    setGoalsList(currentGoals => [
      ...currentGoals,{
        key: Math.random().toString(),
        value:goalTitle
      }]);
  }
  const removeGoalHandler=goalKey=>{
    setGoalsList(currentGoals => currentGoals.filter((goal)=> goal.key !== goalKey)
    );
  }
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList 
        data={goalsList} 
        renderItem={ itemData =>(
          <GoalItem 
            goalKey={itemData.item.key} 
            onDelete={removeGoalHandler} 
            title={itemData.item.value} />
        )} 
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50
  }
});

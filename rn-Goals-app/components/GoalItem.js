import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onLongPress={props.onDelete.bind(this,props.goalKey)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem:{
        padding:10,
        borderColor:'black',
        borderWidth:1,
        backgroundColor:'#ccc',
        margin:5
      }
});

export default GoalItem;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LessonScreen() {
return (
    <View style={styles.container}>
        <Text>This is the lesson screen</Text>
    </View>
    );  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
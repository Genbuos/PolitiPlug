import React from 'react'
import { View, Text, StyleSheet }  from 'react-native';

export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Text>This is the Home Screen</Text>
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
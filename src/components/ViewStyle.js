import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ViewStyle = ({ childern }) => {
    return (
        <View style={styles.container}>
            {childern}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})
export default ViewStyle
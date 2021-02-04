import React from 'react';
import {View, Modal, Text, TouchableOpacity, StyleSheet} from 'react-native'
import Touch from './Touch'

export default props => {
    return(
        <Modal transparent={true} visible={props.isVisible}
        onRequestClose={props.onCancel} animationType='slide'>
        <View style={styles.frame}>
            <View style={styles.container}>
                <Text style={styles.title}>Selecione a dificuldade</Text>
                <Touch easy Press={() => props.onLevelSelected(0.1)} Nivel='Fácil'/>
                <Touch normal Press={() => props.onLevelSelected(0.2)} Nivel='Normal'/>
                <Touch hard Press={() => props.onLevelSelected(0.3)} Nivel='Difícil'/>
            </View>
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    container: {
        backgroundColor: '#808080',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#363636'
    }
})
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default (props) => {
    const styleTouch = [styles.button]
    const buttonStyle = [styles.buttonLabel]
    const {easy, normal, hard} = props;
    if(easy) {styleTouch.push(styles.bgEasy) && buttonStyle.push(styles.titleEasy)}
    if(normal) {styleTouch.push(styles.bgNormal) && buttonStyle.push(styles.titleNormal)}
    if(hard) {styleTouch.push(styles.bgHard) && buttonStyle.push(styles.titleHard)}
  
  return (
    <TouchableOpacity
      style={[styleTouch]}
      onPress={props.Press}>
      <Text style={buttonStyle}>{props.Nivel}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        padding: 5
    },
    buttonLabel: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    bgEasy: {
        backgroundColor: '#228B22',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    bgNormal: {
        backgroundColor: '#FF8C00',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    bgHard: {
        backgroundColor: '#8B0000',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    titleEasy: {
        color: '#90EE90'
    },
    titleNormal: {
        color: '#FFFF00'
    },
    titleHard: {
        color: '#FF6347'
    },
})

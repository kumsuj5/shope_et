import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';

const ButtonComponents = ({btnText, btnstyle = {}, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{...styles.btnstyle, ...btnstyle}}>
      <Text style={styles.btnTextStyle}>{btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnstyle: {
    height: moderateScale(48),
    backgroundColor: '#d90429',
    borderRadius: moderateScale(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    fontSize: scale(12),
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
export default ButtonComponents;

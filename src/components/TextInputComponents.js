import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import ImagePath from '../Constants/ImagePath';
import {TouchableOpacity} from 'react-native-gesture-handler';
const TextInputComponents = ({
  lablee,
  placeholder,
  inputStyle = {},
  onChangeText = () => {},
  rightIcon,
  onPressRight,
  ...props
}) => {
  return (
    <View style={{...styles.inputStyle, ...inputStyle}}>
      <Text style={styles.lableTextStyle}>{lablee}</Text>
      <View style={styles.displayflex}>
        <TextInput
          placeholder={placeholder}
          {...props}
          style={styles.inlineStyle}
        />
        {!!rightIcon ? (
          <TouchableOpacity activeOpacity={0.8} onPress={onPressRight}>
            <Image
              source={rightIcon}
              style={{
                height: 14,
                width: 20,
                margin: 10,
                tintColor: 'rgba(0,0,0,3)',
              }}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.08)',
    borderRadius: moderateScale(4),
  },
  inlineStyle: {
    paddingVertical: moderateVerticalScale(8),
    fontSize: scale(12),
    color: 'rgba(0,0,0,0.8)',
    flex: 1,
  },
  lableTextStyle: {
    fontSize: scale(10),
    color: 'rgba(0,0,0,0.5)',
  },
  displayflex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});

export default TextInputComponents;

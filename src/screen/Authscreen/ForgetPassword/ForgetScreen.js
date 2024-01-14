import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import TextInputComponents from '../../../components/TextInputComponents';
import ButtonComponents from '../../../components/ButtonComponents';
import {moderateVerticalScale} from 'react-native-size-matters';

const ForgetScreen = ({navigation: {goBack}}) => {
  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <Text style={styles.loginText}>Forget Password</Text>
      </View>
      <View style={styles.mainStyle}>
        <TextInputComponents
          lablee="Email Address.."
          placeholder="Enter your email"
          inputStyle={{marginBottom: moderateVerticalScale(28)}}
          keyboardType="email-address"
        />

        <ButtonComponents btnText="CONTINUE" />
        <View style={styles.bottomView}>
          <Text>Back to </Text>
          <TouchableOpacity onPress={() => goBack()}>
            <Text style={{color: '#d90429'}}>Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgetScreen;

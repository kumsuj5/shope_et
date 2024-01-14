import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import ImagePath from '../../../Constants/ImagePath';
import styles from './styles';
import TextInputComponents from '../../../components/TextInputComponents';
import {moderateVerticalScale} from 'react-native-size-matters';
import ButtonComponents from '../../../components/ButtonComponents';
import NavigationString from '../../../Constants/NavigationString';

const SignupScreen = ({navigation}) => {
  const [isVisible, setVisible] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <Text style={styles.loginText}>Register</Text>
      </View>
      <View style={styles.mainStyle}>
        <TextInputComponents
          lablee="Full name"
          placeholder="Enter full name"
          inputStyle={{marginBottom: moderateVerticalScale(28)}}
        />
        <TextInputComponents
          lablee="Email Address.."
          placeholder="Enter your email"
          inputStyle={{marginBottom: moderateVerticalScale(28)}}
          keyboardType="email-address"
        />
        <TextInputComponents
          lablee="Mobile no."
          placeholder="Enter your mobile no"
          inputStyle={{marginBottom: moderateVerticalScale(28)}}
          keyboardType="numeric"
        />
        <TextInputComponents
          lablee="Password"
          placeholder="Enter your Password"
          inputStyle={{marginBottom: moderateVerticalScale(28)}}
          secureTextEntry={isVisible}
          rightIcon={isVisible ? ImagePath.hideIcon : ImagePath.showIcon}
          onPressRight={() => setVisible(!isVisible)}
        />
        <TextInputComponents
          lablee="Confirm password"
          placeholder="Enter your confirm password"
          inputStyle={{marginBottom: moderateVerticalScale(28)}}
          secureTextEntry={isVisible}
          // rightIcon={isVisible ? ImagePath.hideIcon : ImagePath.showIcon}
          // onPressRight={() => setVisible(!isVisible)}
        />

        <ButtonComponents btnText="CREATE ACCOUNT" />
        <View style={styles.bottomView}>
          <Text>Alrady a member </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(NavigationString.Login)}>
            <Text style={{color: '#d90429'}}>Login now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;

import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';
import TextInputComponents from '../../../components/TextInputComponents';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import LayoutOfAuth from '../../../components/LayoutOfAuth';
import styles from './styles';
import ImagePath from '../../../Constants/ImagePath';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ButtonComponents from '../../../components/ButtonComponents';
import NavigationString from '../../../Constants/NavigationString';

const LoginScreen = ({navigation}) => {
  const [isVisible, setVisible] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <Text style={styles.loginText}>Login</Text>
      </View>
      <View style={styles.mainStyle}>
        <TextInputComponents
          lablee="Email Address.."
          placeholder="Enter your email"
          inputStyle={{marginBottom: moderateVerticalScale(28)}}
          keyboardType="email-address"
        />
        <TextInputComponents
          lablee="Password"
          placeholder="Enter your Password"
          inputStyle={{marginBottom: moderateVerticalScale(28)}}
          secureTextEntry={isVisible}
          rightIcon={isVisible ? ImagePath.hideIcon : ImagePath.showIcon}
          onPressRight={() => setVisible(!isVisible)}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationString.ForgetScreen)}
          activeOpacity={0.7}
          style={styles.forgetView}>
          <Text style={styles.forgetText}>Forget Password</Text>
        </TouchableOpacity>
        <ButtonComponents btnText="Login" />
        <View style={styles.bottomView}>
          <Text>Not a member </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(NavigationString.Signup)}>
            <Text style={{color: '#d90429'}}>Register now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

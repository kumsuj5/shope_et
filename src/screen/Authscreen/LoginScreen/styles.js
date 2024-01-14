import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  centered: {
    height: 200,
    backgroundColor: '#d90429',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 250,
  },
  loginText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '500',
  },
  mainStyle: {
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateVerticalScale(44),
    backgroundColor: 'white',
  },
  bottom: {
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    margin: 10,
    width: '80%', // Adjust the width as needed
  },
  forgetView: {
    alignSelf: 'flex-end',
    marginVertical: 24,
  },
  forgetText: {
    fontSize: scale(16),
    color: '#d90429',
  },
  bottomView: {
    flexDirection: 'row',
    marginTop: moderateVerticalScale(72),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateVerticalScale(42),
  },
});

export default styles;

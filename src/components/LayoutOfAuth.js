import {View} from 'react-native';
import React from 'react';

const LayoutOfAuth = ({children}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#f07167'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          borderTopLeftRadius: 100000,
        }}>
        {children}
      </View>
    </View>
  );
};

export default LayoutOfAuth;

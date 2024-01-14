// import React, { useEffect, useState } from 'react';
// import AnimatedSplash from 'react-native-animated-splash-screen';
// import { View, Text, StyleSheet } from 'react-native';
// import Nav from './src/navigation/Nav';

// const App = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     // Simulate a loading process
//     setTimeout(() => {
//       setIsLoaded(true);
//     }, 3000); // Change the duration according to your needs
//   }, []);

//   return (
// <AnimatedSplash
//   translucent={true}
//   isLoaded={isLoaded}
//   logoImage={require('./assets/logo-color.png')} // Provide the path to your logo image
//   backgroundColor={'#fff'} // Set the background color
//   logoHeight={150} // Set the height of the logo
//   logoWidth={150} // Set the width of the logo
// >
//       <View style={styles.container}>
//         <Nav />
//       </View>

//     </AnimatedSplash>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// export default App;


import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Provider } from 'react-redux';
import Nav from './src/navigation/Nav';
import AnimatedSplash from 'react-native-animated-splash-screen';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false); // Add a state to manage the loading state

  useEffect(() => {
    // Simulating a loading state for demonstration purposes
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000); // Change the timeout value according to your loading requirements
  }, []);

  if (!isLoaded) {
    return (
      <AnimatedSplash
        translucent={true}
        isLoaded={isLoaded}
        logoImage={require('./assets/logo-color.png')}
        backgroundColor={'#fff'}
        logoHeight={150}
        logoWidth={150}
      />
    );
  }

  return (

    <Nav />

  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Set the background color
  },
  logo: {
    height: 150, // Set the height of the logo
    width: 150, // Set the width of the logo
  },
});

export default App;



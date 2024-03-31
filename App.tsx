/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {NativeBaseProvider, extendTheme} from 'native-base';
import LightTheme from './theme';
import Main from './Main';

function App(): React.JSX.Element {
  // this is not actually used. Just for demonstrational purposes
  const [themeType, setTheme] = useState('light');
  const handleTheme = () => {
    setTheme(themeType === 'light' ? 'dark' : 'light');
  };

  const theme = extendTheme(LightTheme);

  return (
    <NativeBaseProvider theme={theme}>
      <Main handleTheme={handleTheme} themeType={themeType} />
    </NativeBaseProvider>
  );
}

export default App;

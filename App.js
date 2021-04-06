/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Input from './component/input';
import Result from './component/result';

const App = props => {
  const [data, setData] = useState(null);

  const handleReceiveValue = value => {
    console.log(value);
    return fetch(
      'https://world.openfoodfacts.org/api/v0/product/737628064502.json',
    )
      .then(response => response.json())
      .then(json => {
        setData(json);

        // console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <ScrollView>
      <Input onChangeInput={value => handleReceiveValue(value)} />
      <Result data={data} />
    </ScrollView>
  );
};
export default App;

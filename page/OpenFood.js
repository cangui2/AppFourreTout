/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
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

import Input from '../component/input';
import Result from '../component/result';

const OpenFood = props => {
  const [data, setData] = useState();
  const [condition, setCondition] = useState(false);

  const handleReceiveValue = value => {
    setCondition(false);
    fetch('https://world.openfoodfacts.org/api/v0/product/' + value + '.json')
      .then(response => response.json())
      .then(json => {
        setData(json);
        check(value);
      })
      .catch(error => {
        console.error(error);
      });
  };
  const check = value => {
    if (value.length > 12) {
      setCondition(true);
    } else {
      setCondition(false);
    }
  };

  return (
    <ScrollView>
      <Input onChangeInput={value => handleReceiveValue(value)} />
      <Result data={data} value={condition} />
    </ScrollView>
  );
};
export default OpenFood;

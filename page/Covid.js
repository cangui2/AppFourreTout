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
  Button,
  TextInput,
  FlatList,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OpenFood from './OpenFood';
import LoveCalculator from './LoveCalculator';
import CovidGlobal from './covidGlobal';
import CovidDepartement from './CovidDepartement';

function HomeScreen2({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Resultat Global')}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Resultat Par departement')}
      />
      {/*<Button*/}
      {/*  title="Go to Details"*/}
      {/*  onPress={() => navigation.navigate('covid')}*/}
      {/*/>*/}
      <Text>Salut</Text>
    </View>
  );
}
const Stack = createStackNavigator();
const Covid = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Covid" component={HomeScreen2} />
      <Stack.Screen name="Resultat Global" component={CovidGlobal} />
      <Stack.Screen
        name="Resultat Par departement"
        component={CovidDepartement}
      />
    </Stack.Navigator>
  );
};

export default Covid;

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Image,
  Button,
  TextInput,
  FlatList,
} from 'react-native';
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OpenFood from './OpenFood';
import LoveCalculator from './LoveCalculator';
import CovidGlobal from './covidGlobal';
import CovidDepartement from './CovidDepartement';
//
// function HomeScreen2({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Resultat Global')}
//       />
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Resultat Par departement')}
//       />
//       {/*<Button*/}
//       {/*  title="Go to Details"*/}
//       {/*  onPress={() => navigation.navigate('covid')}*/}
//       {/*/>*/}
//       <Text>Salut</Text>
//     </View>
//   );
// }
// const Stack = createStackNavigator();
const Covid = () => {
  return (
    <Container>
      <Header hasTabs />
      <Tabs>
        <Tab
          heading={
            <TabHeading>
              <Icon name="link" />
              <Text>Covid Resultat Golbal France</Text>
            </TabHeading>
          }>
          <CovidGlobal />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Text>Recherche Par departement</Text>
            </TabHeading>
          }>
          <CovidDepartement />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Covid;

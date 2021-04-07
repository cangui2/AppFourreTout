import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Input from './component/input';
import Result from './component/result';
import OpenFood from './page/OpenFood';
import LoveCalculator from './page/LoveCalculator';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('love')}
      />
    </View>
  );
}
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={OpenFood} />
        <Stack.Screen name="love" component={LoveCalculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

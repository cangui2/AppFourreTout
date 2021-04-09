import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Input from './component/input';
import Result from './component/result';
import OpenFood from './page/OpenFood';
import LoveCalculator from './page/LoveCalculator';
import Covid from './page/Covid';
import CardButton from '@paraboly/react-native-card-button';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        style={styles.image}
        source={require('./Assets/images/CanguiDev.png')}
      />
      <Text>Plein de petit programme tous application</Text>
      {/*<Button*/}
      {/*  title="Go to Details"*/}
      {/*  onPress={() => navigation.navigate('Details')}*/}
      {/*/>*/}
      {/*<Button*/}
      {/*  title="Go to Details"*/}
      {/*  onPress={() => navigation.navigate('love')}*/}
      {/*/>*/}
      {/*<Button*/}
      {/*  title="Go to Details"*/}
      {/*  onPress={() => navigation.navigate('Covid Menu')}*/}
      {/*/>*/}
      <CardButton
        onPress={() => navigation.navigate('Yuka Like')}
        text="Yuka"
        iconSize={34}
        iconColor="white"
        textColor="white"
        iconType="favorite"
        rippleColor="white"
        end={{x: 1, y: 1}}
        start={{x: 0, y: 0}}
        gradientColors={['#BA5370', '#F4E2D8']}
      />
      <CardButton
        onPress={() => navigation.navigate('Love Calculator')}
        text="Love calculator"
        iconSize={34}
        iconColor="white"
        textColor="white"
        iconType="
settings_accessibility
"
        rippleColor="white"
        end={{x: 1, y: 1}}
        start={{x: 0, y: 0}}
        gradientColors={['#3368ff', '#F4E2D8']}
      />
      <CardButton
        onPress={() => navigation.navigate('Covid Menu')}
        text="Covid Menu"
        iconSize={34}
        iconColor="white"
        textColor="white"
        iconType="wifi"
        rippleColor="white"
        end={{x: 1, y: 1}}
        start={{x: 0, y: 0}}
        gradientColors={['#ff3933', '#F4E2D8']}
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
        <Stack.Screen name="Yuka Like" component={OpenFood} />
        <Stack.Screen name="Love Calculator" component={LoveCalculator} />
        <Stack.Screen name="Covid Menu" component={Covid} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  contenair: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

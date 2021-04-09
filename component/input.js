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

const Input = props => {
  const [image, setImage] = useState();
  const [a, setA] = useState(false);

  return (
    <View style={styles.contenair}>
      <Text>Yuka like</Text>
      <View>
        <Text>Base de donnée OpenFood</Text>
        <Image
          style={styles.image}
          source={require('../Assets/images/food.png')}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        onChangeText={props.onChangeInput}
      />
    </View>
  );
};

export default Input;
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

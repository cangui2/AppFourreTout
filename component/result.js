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

const Result = props => {
  const imageListe = () => {
    if (props.data.product.nutrition_grades === 'a') {
      return require('../Assets/images/a.jpg');
    }
    if (props.data.product.nutrition_grades === 'b') {
      return require('../Assets/images/b.jpg');
    }
    if (props.data.product.nutrition_grades === 'c') {
      return require('../Assets/images/c.jpg');
    }
    if (props.data.product.nutrition_grades === 'd') {
      return require('../Assets/images/d.jpg');
    }
    if (props.data.product.nutrition_grades === 'e') {
      return require('../Assets/images/e.jpg');
    }
  };

  if (props.value === true) {
    return (
      <View style={styles.container}>
        <Text>{props.data.product.product_name}</Text>
        <Image
          source={{
            uri: props.data.product.image_url,
          }}
          style={{width: 200, height: 200}}
        />

        <Image source={imageListe()} style={{width: 300, height: 200}} />
        <Text>{props.data.product.ingredients_text}</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Dans le esle</Text>
      </View>
    );
  }
};
export default Result;
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

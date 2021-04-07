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

const LoveCalculator = () => {
  const [hommeNom, setHommeNom] = useState('');
  const [femmeNom, setFemmeNom] = useState('');
  const [respEng, setRespEng] = useState();
  const [traductionFr, setTraduction] = useState();
  console.log('h' + hommeNom);
  console.log('f' + femmeNom);

  const calculApi = (hommeNom, femmeNom) => {
    fetch(
      'https://love-calculator.p.rapidapi.com/getPercentage?fname=' +
        hommeNom +
        '&sname=' +
        femmeNom,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key':
            'b99604eaf0mshd73b53474312099p17b1a4jsn2aaec9015c7c',
          'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
        },
      },
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <ScrollView>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        onChangeText={value => setHommeNom(value)}
        placeholder="useless placeholder"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        onChangeText={value => setFemmeNom(value)}
        placeholder="useless placeholder"
      />
      <Button title="Press me" onPress={calculApi(hommeNom, femmeNom)} />
    </ScrollView>
  );
};
export default LoveCalculator;

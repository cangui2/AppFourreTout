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
import {AnimatedCircularProgress} from 'react-native-circular-progress';
const LoveCalculator = () => {
  const [hommeNom, setHommeNom] = useState('');
  const [femmeNom, setFemmeNom] = useState('');
  const [respEng, setRespEng] = useState('reponse');
  const [traductionFr, setTraduction] = useState();
  const [pourcentage, setPourcentage] = useState('20');
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
        console.log(result.result);
        traduction(result.result);
        setRespEng(result);
        setPourcentage(result.percentage);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const traduction = value => {
    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'accept-encoding': 'application/gzip',
        'x-rapidapi-key': 'b99604eaf0mshd73b53474312099p17b1a4jsn2aaec9015c7c',
        'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
      },
      body: {
        q: {value},
        source: 'en',
        target: 'fr',
      },
    })
      .then(response => console.log(response.data))
      .then(result => {
        console.log(result);
        setTraduction(result);

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
        placeholder="Prenom Homme"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        onChangeText={value => setFemmeNom(value)}
        placeholder="Prenom femme"
      />
      <Button title="Press me" onPress={() => calculApi(hommeNom, femmeNom)} />
      <Text>{respEng.result}</Text>
      <AnimatedCircularProgress
        size={120}
        width={15}
        fill={pourcentage}
        duration={5000}
        tintColor="#00e0ff"
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#3d5875">
        {fill => <Text>{pourcentage}%</Text>}
      </AnimatedCircularProgress>
    </ScrollView>
  );
};
export default LoveCalculator;

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
import {Container, Header, Tab, Tabs, TabHeading, Icon} from 'native-base';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
const LoveCalculator = () => {
  const [hommeNom, setHommeNom] = useState('');
  const [femmeNom, setFemmeNom] = useState('');
  const [respEng, setRespEng] = useState('reponse');
  const [traductionFr, setTraduction] = useState();
  const [pourcentage, setPourcentage] = useState(0);
  console.log('h' + hommeNom);
  console.log('f' + femmeNom);

  const calculApi = (hommeNom, femmeNom) => {
    console.log('calculapi ok');
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
        console.log('resulta' + result.result);
        // traduction(result.result);
        setRespEng(result);
        setPourcentage(result.percentage);
      })
      .catch(err => {
        console.error(err);
      });
  };

  // const traduction = value => {
  //   fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/x-www-form-urlencoded',
  //       'accept-encoding': 'application/gzip',
  //       'x-rapidapi-key': 'b99604eaf0mshd73b53474312099p17b1a4jsn2aaec9015c7c',
  //       'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
  //     },
  //     body: {
  //       q: {value},
  //       source: 'en',
  //       target: 'fr',
  //     },
  //   })
  //     .then(response => console.log(response.data))
  //     .then(result => {
  //       console.log(result);
  //       setTraduction(result);
  //     })
  //
  //     .catch(err => {
  //       console.error(err);
  //     });
  // };

  return (
    <View style={styles.contenair}>
      <Image
        style={styles.image}
        source={require('../Assets/images/love.png')}
      />
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
      <Button title="Valider" onPress={() => calculApi(hommeNom, femmeNom)} />
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
    </View>
  );
};
export default LoveCalculator;
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

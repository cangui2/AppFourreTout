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

const CovidGlobal = props => {
  const [data, setData] = useState(null);
  const list = () => {
    return data.map(element => {
      return (
        <View key={element.toString()} style={{margin: 10}}>
          <Text key={element.key}>Date de mise a jour :{element.date}</Text>
          <Text key={element.key}>
            Nombre de personne gueris:{element.gueris}
          </Text>
          <Text key={element.key}>
            Nombre de nouvelle Hospitalisation :
            {element.nouvellesHospitalisations}
          </Text>
          <Text key={element.key}>
            Nombre d'hospitalisation :{element.hospitalises}
          </Text>
          <Text key={element.key}>
            Nombre de nouvelle entrée en reanimation :
            {element.nouvellesReanimations}
          </Text>
          <Text key={element.key}>
            Nombre de personne en reanimation :{element.reanimation}
          </Text>
          <Text key={element.key}>
            Nombre de personne deceder : {element.deces}
          </Text>
        </View>
      );
    });
  };

  const covidGlobalData = () => {
    fetch('https://coronavirusapi-france.now.sh/FranceLiveGlobalData')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setData(json.FranceGlobalLiveData);
      })
      .catch(error => {
        console.error(error);
      });
  };
  if (data === null) {
    return (
      <View>
        <Text>if</Text>

        <Button title="Press me" onPress={() => covidGlobalData()} />
      </View>
    );
  } else {
    return (
      <View>
        <Text>else</Text>
        <Text>{data.deces}</Text>
        {list()}
        <Button title="Actualiser" onPress={() => covidGlobalData()} />
      </View>
    );
  }
};
export default CovidGlobal;

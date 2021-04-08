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
import RNPickerSelect from 'react-native-picker-select';

const CovidDepartement = () => {
  const [departement, setDepartement] = useState('');
  const [data, setData] = useState(null);
  console.log(data);
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
  const searchByDepartement = value => {
    console.log(value);
    fetch(
      'https://coronavirusapi-france.now.sh/LiveDataByDepartement?Departement=' +
        value,
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setData(json.LiveDataByDepartement);
        console.log('resp' + data);
        setDepartement(value);
      })
      .catch(error => {
        console.error(error);
      });
  };
  if (data === null) {
    return (
      <View style={styles.container}>
        <Text>
          {departement
            ? `My favourite language is ${departement}`
            : 'Please select a language'}
        </Text>
        <RNPickerSelect
          onValueChange={value => searchByDepartement(value)}
          useNativeAndroidPickerStyle={false}
          placeholder={{label: 'Select your favourite language', value: null}}
          items={[
            {label: 'Ain', value: 'Ain'},
            {label: 'Aisne', value: 'Aisne'},
            {label: 'Allier', value: 'Allier'},
            {
              label: 'Alpes-de-Haute-Provence',
              value: 'Alpes-de-Haute-Provence',
            },
            {label: 'Hautes-Alpes', value: 'Hautes-Alpes'},
            {label: 'Alpes-Maritimes', value: 'Alpes-Maritimes'},
          ]}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.test}>
          {departement
            ? `My favourite language is ${departement}`
            : 'Please select a language'}
        </Text>
        <RNPickerSelect
          style={styles.test}
          onValueChange={value => searchByDepartement(value)}
          useNativeAndroidPickerStyle={false}
          placeholder={{label: 'Select your favourite language', value: null}}
          items={[
            {label: 'Ain', value: 'Ain'},
            {label: 'Aisne', value: 'Aisne'},
            {label: 'Allier', value: 'Allier'},
            {
              label: 'Alpes-de-Haute-Provence',
              value: 'Alpes-de-Haute-Provence',
            },
            {label: 'Hautes-Alpes', value: 'Hautes-Alpes'},
            {label: 'Alpes-Maritimes', value: 'Alpes-Maritimes'},
          ]}
        />
        <Button
          title="Go to Details"
          // onPress={() => navigation.navigate('Resultat Global')}
        />
        <View>{list()}</View>
      </View>
    );
  }
};
export default CovidDepartement;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    color: 'red',
    borderWidth: 4,
  },
});

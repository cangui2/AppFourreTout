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
            {label: 'Alpes-de-Haute-Provence'},
            {label: 'Hautes-Alpes', value: 'Hautes-Alpes'},
            {label: 'Ardèche', value: 'Ardèche'},
            {label: 'Ardennes', value: 'Ardennes'},
            {label: 'Ariège', value: 'Ariège'},
            {label: 'Aube', value: 'Aube'},
            {label: 'Aude', value: 'Aude'},
            {label: 'Aveyron', value: 'Aveyron'},
            {label: 'Bouches-du-Rhône', value: 'Bouches-du-Rhône'},
            {label: 'Calvados', value: 'Calvados'},
            {label: 'Cantal', value: 'Cantal'},
            {label: 'Charente', value: 'Charente'},
            {label: 'Charente-Maritime', value: 'Charente-Maritime'},
            {label: 'Cher', value: 'Cher'},
            {label: 'Corrèze', value: 'Corrèze'},
            {label: "Côte-d'Or", value: "Côte-d'Or"},
            {label: "Côtes-d'Armor", value: "Côtes-d'Armor"},
            {label: 'Creuse', value: 'Creuse'},
            {label: 'Dordogne', value: 'Dordogne'},
            {label: 'Drôme', value: 'Drôme'},
            {label: 'Eure', value: 'Eure'},
            {label: 'Eure-et-Loir', value: 'Eure-et-Loir'},
            {label: 'Finistère', value: 'Finistère'},
            {label: 'Corse-du-Sud', value: 'Corse-du-Sud'},
            {label: 'Haute-Corse', value: 'Haute-Corse'},
            {label: 'Gard', value: 'Gard'},
            {label: 'Haute-Garonne', value: 'Haute-Garonne'},
            {label: 'Gers', value: 'Gers'},
            {label: 'Gironde', value: 'Gironde'},
            {label: 'Hérault', value: 'Hérault'},
            {label: 'Ille-et-Vilaine', value: 'Ille-et-Vilaine'},
            {label: 'Indre', value: 'Indre'},
            {label: 'Indre-et-Loire', value: 'Indre-et-Loire'},
            {label: 'Isère', value: 'Isère'},
            {label: 'Jura', value: 'Jura'},
            {label: 'Landes', value: 'Landes'},
            {label: 'Loir-et-Cher', value: 'Loir-et-Cher'},
            {label: 'Loire', value: 'Loire'},
            {label: 'Haute-Loire', value: 'Haute-Loire'},
            {label: 'Loire-Atlantique', value: 'Loire-Atlantique'},
            {label: 'Loiret', value: 'Loiret'},
            {label: 'Lot', value: 'Lot'},
            {label: 'Lot-et-Garonne', value: 'Lot-et-Garonne'},
            {label: 'Lozère', value: 'Lozère'},
            {label: 'Maine-et-Loir', value: 'Maine-et-Loir'},
            {label: 'Manche', value: 'Manche'},
            {label: 'Marne', value: 'Marne'},
            {label: 'Haute-Marne', value: 'Haute-Marne'},
            {label: 'Mayenne', value: 'Mayenne'},
            {label: 'Meurthe-et-Moselle', value: 'Meurthe-et-Moselle'},
            {label: 'Meuse', value: 'Meuse'},
            {label: 'Morbihan', value: 'Morbihan'},
            {label: 'Moselle', value: 'Moselle'},
            {label: 'Nièvre', value: 'Nièvre'},
            {label: 'Nord', value: 'Nord'},
            {label: 'Oise', value: 'Oise'},
            {label: 'Orne', value: 'Orne'},
            {label: 'Pas-de-Calais', value: 'Pas-de-Calais'},
            {label: 'Puy-de-Dôme', value: 'Puy-de-Dôme'},
            {label: 'Pyrénées-Atlantiques', value: 'Pyrénées-Atlantiques'},
            {label: 'Hautes-Pyrénées', value: 'Hautes-Pyrénées'},
            {label: 'Pyrénées-Orientales', value: 'Pyrénées-Orientales'},
            {label: 'Bas-Rhin', value: 'Bas-Rhin'},
            {label: 'Haut-Rhin', value: 'Haut-Rhin'},
            {label: 'Rhône', value: 'Rhône'},
            {label: 'Haute-Saône', value: 'Haute-Saône'},
            {label: 'Saône-et-Loire', value: 'Saône-et-Loire'},
            {label: 'Sarthe', value: 'Sarthe'},
            {label: 'Savoie', value: 'Savoie'},
            {label: 'Haute-Savoie', value: 'Haute-Savoie'},
            {label: 'Paris', value: 'Paris'},
            {label: 'Seine-Maritime"', value: 'Seine-Maritime"'},
            {label: 'Seine-et-Marne', value: 'Seine-et-Marne'},
            {label: 'Yvelines', value: 'Yvelines'},
            {label: 'Deux-Sèvres', value: 'Deux-Sèvres'},
            {label: 'Somme', value: 'Somme'},
            {label: 'Tarn', value: 'Tarn'},
            {label: 'Tarn-et-Garonne', value: 'Tarn-et-Garonne'},
            {label: 'Var', value: 'Var'},
            {label: 'Vaucluse', value: 'Vaucluse'},
            {label: 'Vendée', value: 'Vendée'},
            {label: 'Vienne', value: 'Vienne'},
            {label: 'Haute-Vienne', value: 'Haute-Vienne'},
            {label: 'Vosges', value: 'Vosges'},
            {label: 'Yonne', value: 'Yonne'},
            {label: 'Territoire de Belfort', value: 'Territoire de Belfort'},
            {label: 'Essonne', value: 'Essonne'},
            {label: 'Hauts-de-Seine', value: 'Hauts-de-Seine'},
            {label: 'Seine-Saint-Denis', value: 'Seine-Saint-Denis'},
            {label: 'Val-de-Marne', value: 'Val-de-Marne'},
            {label: "Val-d'Oise", value: "Val-d'Oise"},
            {label: 'Guadeloupe', value: 'Guadeloupe'},
            {label: 'Martinique', value: 'Martinique'},
            {label: 'Guyane', value: 'Guyane'},
            {label: 'La Réunion', value: 'La Réunion'},
            {label: 'Mayotte', value: 'Mayotte'},
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
          onValueChange={item => searchByDepartement(item)}
          useNativeAndroidPickerStyle={false}
          placeholder={{label: 'Select your favourite language', value: null}}
          items={[
            {label: 'Ain', value: 'Ain'},
            {label: 'Aisne', value: 'Aisne'},
            {label: 'Allier', value: 'Allier'},
            {label: 'Alpes-de-Haute-Provence'},
            {label: 'Hautes-Alpes', value: 'Hautes-Alpes'},
            {label: 'Ardèche', value: 'Ardèche'},
            {label: 'Ardennes', value: 'Ardennes'},
            {label: 'Ariège', value: 'Ariège'},
            {label: 'Aube', value: 'Aube'},
            {label: 'Aude', value: 'Aude'},
            {label: 'Aveyron', value: 'Aveyron'},
            {label: 'Bouches-du-Rhône', value: 'Bouches-du-Rhône'},
            {label: 'Calvados', value: 'Calvados'},
            {label: 'Cantal', value: 'Cantal'},
            {label: 'Charente', value: 'Charente'},
            {label: 'Charente-Maritime', value: 'Charente-Maritime'},
            {label: 'Cher', value: 'Cher'},
            {label: 'Corrèze', value: 'Corrèze'},
            {label: "Côte-d'Or", value: "Côte-d'Or"},
            {label: "Côtes-d'Armor", value: "Côtes-d'Armor"},
            {label: 'Creuse', value: 'Creuse'},
            {label: 'Dordogne', value: 'Dordogne'},
            {label: 'Drôme', value: 'Drôme'},
            {label: 'Eure', value: 'Eure'},
            {label: 'Eure-et-Loir', value: 'Eure-et-Loir'},
            {label: 'Finistère', value: 'Finistère'},
            {label: 'Corse-du-Sud', value: 'Corse-du-Sud'},
            {label: 'Haute-Corse', value: 'Haute-Corse'},
            {label: 'Gard', value: 'Gard'},
            {label: 'Haute-Garonne', value: 'Haute-Garonne'},
            {label: 'Gers', value: 'Gers'},
            {label: 'Gironde', value: 'Gironde'},
            {label: 'Hérault', value: 'Hérault'},
            {label: 'Ille-et-Vilaine', value: 'Ille-et-Vilaine'},
            {label: 'Indre', value: 'Indre'},
            {label: 'Indre-et-Loire', value: 'Indre-et-Loire'},
            {label: 'Isère', value: 'Isère'},
            {label: 'Jura', value: 'Jura'},
            {label: 'Landes', value: 'Landes'},
            {label: 'Loir-et-Cher', value: 'Loir-et-Cher'},
            {label: 'Loire', value: 'Loire'},
            {label: 'Haute-Loire', value: 'Haute-Loire'},
            {label: 'Loire-Atlantique', value: 'Loire-Atlantique'},
            {label: 'Loiret', value: 'Loiret'},
            {label: 'Lot', value: 'Lot'},
            {label: 'Lot-et-Garonne', value: 'Lot-et-Garonne'},
            {label: 'Lozère', value: 'Lozère'},
            {label: 'Maine-et-Loir', value: 'Maine-et-Loir'},
            {label: 'Manche', value: 'Manche'},
            {label: 'Marne', value: 'Marne'},
            {label: 'Haute-Marne', value: 'Haute-Marne'},
            {label: 'Mayenne', value: 'Mayenne'},
            {label: 'Meurthe-et-Moselle', value: 'Meurthe-et-Moselle'},
            {label: 'Meuse', value: 'Meuse'},
            {label: 'Morbihan', value: 'Morbihan'},
            {label: 'Moselle', value: 'Moselle'},
            {label: 'Nièvre', value: 'Nièvre'},
            {label: 'Nord', value: 'Nord'},
            {label: 'Oise', value: 'Oise'},
            {label: 'Orne', value: 'Orne'},
            {label: 'Pas-de-Calais', value: 'Pas-de-Calais'},
            {label: 'Puy-de-Dôme', value: 'Puy-de-Dôme'},
            {label: 'Pyrénées-Atlantiques', value: 'Pyrénées-Atlantiques'},
            {label: 'Hautes-Pyrénées', value: 'Hautes-Pyrénées'},
            {label: 'Pyrénées-Orientales', value: 'Pyrénées-Orientales'},
            {label: 'Bas-Rhin', value: 'Bas-Rhin'},
            {label: 'Haut-Rhin', value: 'Haut-Rhin'},
            {label: 'Rhône', value: 'Rhône'},
            {label: 'Haute-Saône', value: 'Haute-Saône'},
            {label: 'Saône-et-Loire', value: 'Saône-et-Loire'},
            {label: 'Sarthe', value: 'Sarthe'},
            {label: 'Savoie', value: 'Savoie'},
            {label: 'Haute-Savoie', value: 'Haute-Savoie'},
            {label: 'Paris', value: 'Paris'},
            {label: 'Seine-Maritime"', value: 'Seine-Maritime"'},
            {label: 'Seine-et-Marne', value: 'Seine-et-Marne'},
            {label: 'Yvelines', value: 'Yvelines'},
            {label: 'Deux-Sèvres', value: 'Deux-Sèvres'},
            {label: 'Somme', value: 'Somme'},
            {label: 'Tarn', value: 'Tarn'},
            {label: 'Tarn-et-Garonne', value: 'Tarn-et-Garonne'},
            {label: 'Var', value: 'Var'},
            {label: 'Vaucluse', value: 'Vaucluse'},
            {label: 'Vendée', value: 'Vendée'},
            {label: 'Vienne', value: 'Vienne'},
            {label: 'Haute-Vienne', value: 'Haute-Vienne'},
            {label: 'Vosges', value: 'Vosges'},
            {label: 'Yonne', value: 'Yonne'},
            {label: 'Territoire de Belfort', value: 'Territoire de Belfort'},
            {label: 'Essonne', value: 'Essonne'},
            {label: 'Hauts-de-Seine', value: 'Hauts-de-Seine'},
            {label: 'Seine-Saint-Denis', value: 'Seine-Saint-Denis'},
            {label: 'Val-de-Marne', value: 'Val-de-Marne'},
            {label: "Val-d'Oise", value: "Val-d'Oise"},
            {label: 'Guadeloupe', value: 'Guadeloupe'},
            {label: 'Martinique', value: 'Martinique'},
            {label: 'Guyane', value: 'Guyane'},
            {label: 'La Réunion', value: 'La Réunion'},
            {label: 'Mayotte', value: 'Mayotte'},
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

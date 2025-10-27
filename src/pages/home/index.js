import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

//styles
import customBlack from '../../styles/colors'
//components
import SearchBar from './components/SearchBar'
import CardService from './components/ServiceCards';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';



const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, ####</Text> 
      <SearchBar />
      <Text style={styles.texts}>Todos jogos completos  </Text>
      <Text style={styles.texts}>Jogos recentes: </Text>
      <View style={styles.cardsContainer}>
        <View style={styles.row}>
          <CardService iconName="football-outline" iconSize={60} iconColor={customBlack} serviceName="Futsal"/>
          <CardService iconName="basketball" iconSize={60} iconColor={customBlack} serviceName="Basquete"/>
        </View>
        <View style={styles.row}>
          <CardService iconName="sports-volleyball" iconSize={60} iconColor={customBlack} serviceName="Volei"/>
          <CardService iconName="game-controller" iconSize={60} iconColor={customBlack} serviceName="Jogos "/>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Barbers')}
      >
        <Text style={styles.buttonText}>AGENDAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

//styles
import customBlack from '../../styles/colors'
//components
import SearchBar from './components/SearchBar'
import CardService from './components/ServiceCards';
import { ScrollView } from 'react-native';




const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, Raul</Text> 
      <SearchBar />
      <Text style={styles.texts}>Resultados dos últimos jogos do JUI temporada 2025  </Text>
      <View style={styles.cardsContainer}>
        <View style={styles.row}>
          <CardService iconName="football-outline" iconSize={60} iconColor={customBlack} serviceName="Futsal"/>
          <CardService iconName="basketball" iconSize={60} iconColor={customBlack} serviceName="Basquete"/>
        </View>

        <View style={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>Últimos Resultados</Text>
          <ScrollView showsVerticalScrollIndicator={true}>
            <Text style={styles.resultsText}>Raposada 3 x 2 Castores</Text>
            <Text style={styles.resultsText}>Forasteiros 2 x 2 Aguias</Text>
            <Text style={styles.resultsText}>Medusa 0 x 5 Gorilada</Text>
            <Text style={styles.resultsText}>Rato Louco 0 x 0 Serpente</Text>
            <Text style={styles.resultsText}>Águias 4 x 1 Rato Louco</Text>
            <Text style={styles.resultsText}>Raposada 1 x 3 Gorilada</Text>
            <Text style={styles.resultsText}>Castores 2 x 0 Medusa</Text>
          </ScrollView>
        </View>

        <View style={styles.row}>
          <CardService iconName="tennisball-outline" iconSize={60} iconColor={customBlack} serviceName="Volei"/>
          <CardService iconName="game-controller" iconSize={60} iconColor={customBlack} serviceName="Jogos "/>
        </View>
      </View>
      
    </View>
  );
};

export default HomeScreen;
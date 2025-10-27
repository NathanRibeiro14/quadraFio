import { Text, View, FlatList } from 'react-native';
import { Button } from 'react-native';
import styles from './styles';

//components
import BarberShopCard from './components/BarberShopCard';
import InfoCard from './components/InfoCard';

//imgtest
import barberimg from '../../assets/gorilada.jpeg'
import barberimg2 from '../../assets/medusa.jpeg'
import barberimg3 from '../../assets/forasteiros.jpeg'
import barberimg4 from '../../assets/aguias.jpeg'
import barberimg5 from '../../assets/raposada.jpg'
import barberimg6 from '../../assets/castores.jpeg'

const barberShops = [
  { id: '1', name: 'Gorilada', rating: 4.0, distance: '0.6 Vitória', image: barberimg },
  { id: '2', name: 'Medusa', rating: 4.0, distance: '0.9 Vitória', image: barberimg2 },
  { id: '3', name: 'Forasteiros', rating: 3.0, distance: '0.4 Vitória', image: barberimg3},
  { id: '4', name: 'Aguias', rating: 6.0, distance: '0.5 Vitória', image: barberimg4},
  { id: '5', name: 'Raposada', rating: 3.0, distance: '0.6 Vitória', image: barberimg5},
  { id: '6', name: 'Castores', rating: 6.0, distance: '0.3 Vitória', image: barberimg6},
]

const BarbersScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <InfoCard/>
      <FlatList
        data={barberShops}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <BarberShopCard name={item.name} rating={item.rating} image={item.image} distance={item.distance} />
        )}
      />
      <View 
        style={{ 
          borderRadius: 10, 
          overflow: 'hidden',
          alignSelf: 'center',
          width: '60%',
        }}>
        <Button
          title="Voltar para home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}

export default BarbersScreen;

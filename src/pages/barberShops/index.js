import { Text, View, FlatList } from 'react-native';
import { Button } from 'react-native';
import styles from './styles';

//components
import BarberShopCard from './components/BarberShopCard';
import InfoCard from './components/InfoCard';

//imgtest
import gorilada from '../../assets/gorilada.jpeg'
import medusa from '../../assets/medusa.jpeg'
import forasteiros from '../../assets/forasteiros.jpeg'
import aguias from '../../assets/aguias.jpeg'
import raposada from '../../assets/raposada.jpg'
import castores from '../../assets/castores.jpeg'
import rato from '../../assets/rato.jpeg'
import serpente from '../../assets/serpente.jpeg'

const barberShops = [
  { id: '1', name: 'Gorilada', rating: 4.0, distance: '0.9 Vitória', image: gorilada },
  { id: '2', name: 'Medusa', rating: 5.0, distance: '0.3 Vitória', image: medusa },
  { id: '3', name: 'Forasteiros', rating: 3.0, distance: '0.4 Vitória', image: forasteiros},
  { id: '4', name: 'Aguias', rating: 6.0, distance: '0.7 Vitória', image: aguias},
  { id: '5', name: 'Raposada', rating: 3.0, distance: '0.8 Vitória', image: raposada},
  { id: '6', name: 'Castores', rating: 5.0, distance: '0.6 Vitória', image: castores},
  { id: '7', name: 'Rato', rating: 6.0, distance: '0.4 Vitória', image: rato},
  { id: '8', name: 'Serpente', rating: 4.0, distance: '0.4 Vitória', image: serpente},
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

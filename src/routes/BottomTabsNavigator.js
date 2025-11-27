import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

//Import Screens
import HomeScreen from '../pages/home/index';
import ProfileScreen from '../pages/profile';
import SchedulingsClientsScreen from '../pages/schedulingForClients';
import BarbersScreen from '../pages/barberShops';


const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'HomeScreen') iconName = 'home';
          else if (route.name === 'Atletica') iconName = 'table';
          else if (route.name === 'SchedulingClients') iconName = 'calendar';
          else if (route.name === 'Profile') iconName = 'person';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '  #000000ff',
        tabBarInactiveTintColor: '#EFEFD0',
        tabBarStyle: { backgroundColor: '#6EB4FF' },

        headerShown: true,
        headerTransparent: true,
        headerTitle: '',
        headerShadowVisible: false,
        headerTintColor: '#FFF',
      })}
    >

      <Tab.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ 
          headerShown: true,            // Habilita o header
          headerTransparent: true,      // Deixa transparente
          headerTitle: '',              // Remove título padrão
          headerShadowVisible: false,   // Remove a linha de sombra
          title: 'Início',              // Se quiser, pode deixar o título visível
          headerTintColor: '#FFF',  
        }} />
      <Tab.Screen
        name='Atleticas'
        component={BarbersScreen}
        options={{ headerShown: false, title: 'Atléticas' }} />
      <Tab.Screen
        name="SchedulingClients"
        component={SchedulingsClientsScreen}
        options={{ headerShown: false, title: 'Agendamentos' }} />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false, title: 'Perfil' }} />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigator;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './screens/Dashboard';
import VehicleDetails from './screens/VehicleDetails';
import LoginPage from './screens/LoginPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

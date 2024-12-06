import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './src/components/Dashboard';
import CurrentTasks from './src/components/VehicleDetails';
import LoginPage from './src/components/LoginPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="CurrentTasks" component={CurrentTasks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


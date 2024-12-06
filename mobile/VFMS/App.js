import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
import Dashboard from './screens/Dashboard';
import VehicleDetails from './screens/VehicleDetails';
import LoginPage from './screens/LoginPage';
=======
import Dashboard from './src/components/Dashboard';
import VehicleDetails from './src/components/VehicleDetails';
import LoginPage from './src/components/LoginPage';
>>>>>>> 8b4cb08d78a1c14bcc6b76efc7050f4ac521f237

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
<<<<<<< HEAD
        <Stack.Screen name="LoginPage" component={LoginPage} />
=======
        {/* <Stack.Screen name="LoginPage" component={LoginPage} /> */}
>>>>>>> 8b4cb08d78a1c14bcc6b76efc7050f4ac521f237
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

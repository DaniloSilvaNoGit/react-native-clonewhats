import React from 'react'
import { Chat } from './screens/chat'
import { Mensagens } from './screens/mensagens'
import { Header } from './components/header';
import { TituloContato } from './components/TituloContatos/index';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chat" >
        <Stack.Screen name="Chat" component={Chat} 
        options={{
          header: props => <Header />
        }}
        />
        <Stack.Screen name="Mensagens" component={Mensagens} options={{
          header: props => <TituloContato />
        }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

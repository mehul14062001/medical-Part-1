import { StatusBar } from 'expo-status-bar';
import React, { createContext, useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contants from 'expo-constants';
import AddPatient from './screens/AddPatient';
import Home from './screens/Home';
import Report from './screens/Report';
import Symptoms from './screens/Symptoms';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer, initState } from './reducers/reducer'


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export const context = createContext()

const Stack = createStackNavigator();


function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddPatient" component={AddPatient} options={{ title: "Patient" }} />
        <Stack.Screen name="Report" component={Report} options={{ title: "" }} />
        <Stack.Screen name="Symptoms" component={Symptoms} options={{ title: "Symptoms" }} />
      </Stack.Navigator>
    </View>
  );
}

export default () => {

  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <context.Provider value={
      {
        state: state,
        dispatch: dispatch
      }
    }>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </context.Provider >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebebeb",
  },
});

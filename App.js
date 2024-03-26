import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import { View,Text , Button , StyleSheet} from 'react-native';
import MainScreen from './screens/MainScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import ArticlesListScreen from './screens/ArtilesListScreen';
import ArticlesScreen  from './screens/ArticlesScreen';

const Tab = createMaterialTopTabNavigator();




function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator 
         style={styles.styleTopContainer} 
      >
      <Tab.Screen name="الرئيسية" component={MainScreen} />
      <Tab.Screen name="مقالات" component={ArticlesScreen} />
      <Tab.Screen name="عن الموقع" component={AboutUsScreen} />  
    </Tab.Navigator>
    
   </NavigationContainer>
);
}

styles = StyleSheet.create({
   styleTopContainer : {
     margin:5,
     paddingTop: 40,
     backgroundColor:'white',
   }
});

export default App ;





{/* <NavigationContainer >
  <Stack.Navigator>
    <Stack.Screen 
    name="Main" 
    component={MainScreen} 
    options={({navigation,route})=>({
      headerTitle : () => <Text>My app</Text>

    })
    }
     />
    <Stack.Screen name="About" component={AboutUsScreen} />
  </Stack.Navigator>
</NavigationContainer> */}
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Image ,Text , StyleSheet , ScrollView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import ArticlesListScreen from "./ArtilesListScreen";
import ArricleScreen from "./ArticleScreen";

const Stack = createNativeStackNavigator();

const ArticlesScreen = () => {

    return (
        
          <Stack.Navigator>
            <Stack.Screen name="قائمة المقالات" component={ArticlesListScreen} />
            <Stack.Screen name="Article" component={ArricleScreen} />
          </Stack.Navigator>
      );
}

styles = StyleSheet.create({

});


export default ArticlesScreen ;






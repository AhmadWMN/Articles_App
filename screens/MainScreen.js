import React, { useEffect , useState } from "react";
import {Text,StyleSheet,View,Button} from 'react-native';


const MainScreen = ({navigation}) =>{
  const [count,setCount] = useState(0);

  useEffect(()=> {
    navigation.setOptions({

    headerRight: ()=> (
      <View>
      <Button onPress={()=>setCount((c)=> c+1)} title="Info1"/>
      </View>
    ),
  });

  },[navigation]);



    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
      <Text>count {count}</Text>
      <Button
        title="Go to About... again"
        onPress={() => navigation.push('About')}
      />
    </View>
    );
}

const styles = StyleSheet.create({
});


export default MainScreen ;
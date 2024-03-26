import React , {useState} from "react";
import {Text, View , StyleSheet , Image ,TouchableOpacity} from 'react-native';


const Article =({title , image  , body, navigation})=> {

    const [isLoad , setIsLoad] = useState(false);

    return(
        <TouchableOpacity onPress={() =>{navigation.navigate('Article', {
            title: title,
            image: image,
            body:body
          })}}> 
        <View style={styles.article}>
           <Text style ={styles.title}>{title}</Text>
           <Image accessibilityLabel='image' onLoad={()=> setIsLoad(true)} style = {styles.image} source={{uri:image}}/>
           <Text>{!isLoad && 'Unloaded image'}</Text>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    article: {
        flexDirection:'row',
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10
    },
    title: {
        flex:3,
        fontSize: 15,
    },
    image:{
        flex:2,
        width:60,
        height:100,
        borderRadius:10
    }
});
export default Article ;





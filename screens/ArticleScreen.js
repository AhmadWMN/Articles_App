import React from "react";
import {Image ,Text , StyleSheet , ScrollView } from "react-native";


const ArticleScreen = ({route}) => {

const {title,image,body} = route.params;
    return (
        <ScrollView style={styles.container}>
          <Text style = {styles.title}>{title}</Text>
          <Image style={styles.image} source={{uri:image}}/>
          <Text style={styles.body}>{body}</Text>
        </ScrollView>
      );
}
export default ArticleScreen ;


styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'white',
        marginTop:30,
        marginLeft:10,
        padding:10,
        marginRight:10
    },
    title: {
        textAlign:'center',
        fontSize:20,
        fontWeight: 'bold',
        padding:10,
    },
    image: {
        width:'auto',
        height:200,
        paddingTop:10,
        borderRadius:10
    },
    body:{
        padding:10,
        fontSize:15,
    }
});






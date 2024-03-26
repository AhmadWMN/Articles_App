import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Text ,FlatList ,StyleSheet, View ,Button} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import SearchBar from './components/SearchBarTop';
import Article from './components/Article';


const ArticlesListScreen = ({navigation})=> {

    const Articles = [
        {id:'1',title:'The actual planner of Israel',image:'https://m.media-amazon.com/images/I/81b7kpY1pHL.jpg',body:'vjfiguhghdhvh hdfvdfvdfvhhjxhuhksldlkfjjchsbchbvbhvbskchv  vhfhvuh udhsvuhuvh uhushuvh sjkHIH'},
        {id:'2',title:'War of Gaza',image:'https://palinfo.com/wp-content/uploads/2023/12/11-1.jpg',body:'vjfiguhghdhvh hdfvdfvdfvhhjxhuhksldlkfjjchsbchbvbhvbskchv  vhfhvuh udhsvuhuvh uhushuvh sjkHIH'},
        {id:'3',title:'To be hounst',image:'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/34246/images/sz5gKZSVQX0JKMUOMTY5_Honesty_3.jpg',body:'vjfiguhghdhvh hdfvdfvdfvhhjxhuhksldlkfjjchsbchbvbhvbskchv  vhfhvuh udhsvuhuvh uhushuvh sjkHIH'},
        {id:'4',title:'How 7th Octobar changed world!',image:'https://nournews.ir/Media/Photo/23/10/23101101002079_Org.jpg',body:'vjfiguhghdhvh hdfvdfvdfvhhjxhuhksldlkfjjchsbchbvbhvbskchv  vhfhvuh udhsvuhuvh uhushuvh sjkHIH'},
        {id:'5',title:'The process in Gaza , and the result in Westbank',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Israel_Gaza_West_Bank_Locator.png/474px-Israel_Gaza_West_Bank_Locator.png',body:'vjfiguhghdhvh hdfvdfvdfvhhjxhuhksldlkfjjchsbchbvbhvbskchv  vhfhvuh udhsvuhuvh uhushuvh sjkHIH'},
        {id:'6',title:'They have a lot to do , but they dont want (Afraid)...',image:'https://s.france24.com/media/display/a6d22b4c-53f3-11e9-b743-005056bff430/w:1280/p:16x9/ligue_arabe_1.jpg',body:'vjfiguhghdhvh hdfvdfvdfvhhjxhuhksldlkfjjchsbchbvbhvbskchv  vhfhvuh udhsvuhuvh uhushuvh sjkHIH'},
        {id:'7',title:'The best solution was to start the war',image:'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/85aa/live/06543fb0-65d8-11ee-9e82-ad326ec972f2.jpg',body:'vjfiguhghdhvh hdfvdfvdfvhhjxhuhksldlkfjjchsbchbvbhvbskchv  vhfhvuh udhsvuhuvh uhushuvh sjkHIH'}
    ];

    return(
    <View style={styles.container}>
        <View style={styles.headerContainer}>
             <Text style={styles.headerTitle}>قائمة المقالات</Text>
             <SearchBar/>
        </View>
        <FlatList
          data={Articles}
          renderItem= {({item}) =>(
          <Article title={item.title} image={item.image} body={item.body} navigation={navigation}/>
          )}
          keyExtractor={item => item.id.toString()}
          /> 
    </View>
    );

}



const styles = StyleSheet.create({
    container: {
        flex:1,   
        backgroundColor: '#777777'  
    },
    navBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5,
        margin:5,
    },
    buttonStyle: {
       margin:5,
       width:100,
    },

    headerContainer: {
        padding:10,
        margin:15
    },
    headerTitle: {
        color:'white',
        fontSize: 30,
        textAlign:'center'
    },
    
});

export default ArticlesListScreen ;




// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList } from 'react-native';
// import axios from 'axios';

// function App() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     axios.get('/api/articles') // Replace 'http://your-api-url' with your actual API URL
//       .then(response => setItems(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   const renderItem = ({ item }) => (
//     <View>
//       <Text>{item.name}</Text>
//       <Text>{item.description}</Text>
//     </View>
//   );

//   return (
//     <View>
//       <Text>Items</Text>
//       <FlatList
//         data={items}
//         renderItem={renderItem}
//         keyExtractor={item => item._id}
//       />
//     </View>
//   );
// }

// export default App;

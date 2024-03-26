import react , {useState} from "react";
import {View , Text , StyleSheet} from "react-native";
import { SearchBar } from 'react-native-elements';


const SearchBarTop =()=> {

    const [search, setSearch] = useState("");

    return (
    <View style={styles.view}>
        <SearchBar
          placeholder="البحث"
          onChangeText={setSearch}
          value={search}
          />
    </View>
    );
}



const styles = StyleSheet.create({
        view: {
          margin: 10, 
        },
        });

export default SearchBarTop ;

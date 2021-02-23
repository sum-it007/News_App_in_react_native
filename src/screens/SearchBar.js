import React from 'react'
import {View,Text, TextInput,StyleSheet} from 'react-native'

const SearchBar = ({country,onTermChange,onTermSubmit}) => {
    return(
        <View>
            <TextInput 
                style={styles.searchBar}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Enter Country'
                value = {country}
                onChangeText={(newCountry)=>onTermChange(newCountry)}
                onEndEditing={()=>onTermSubmit()}/>
        </View>
    )
}

const styles = StyleSheet.create({

    searchBar:{
        flex:1,
        borderWidth:2,
        borderColor:'black'
    }
})

export default SearchBar
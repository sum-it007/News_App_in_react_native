import React,{useState} from 'react';
import {Button,StyleSheet, View} from 'react-native';
import axios from 'axios';
import SearchBar from './SearchBar'
import { setTokenSourceMapRange } from 'typescript';
import ResultsList from './ResultsList'


const SearchScreen = () => {

    


    const [country, setCountry] = useState('in')
    const [result, setResult] = useState([])
    console.log(result)
    const checkNews = (country) => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=c68ffa0db748436395e392a50d1c8cc4`,
      )
      .then((res) => setResult(res.data.articles))
  }
  const findNewsByAuthor = (author) => {
        return result.filter(res => {
            return res.author === author
        })
    } 

  return (
    <View style={styles.viewStyle}>
    <View style={styles.searchNews}>
    <SearchBar
        country={country}
        onTermChange={(newTerm)=>setCountry(newTerm)}
        onTermSubmit={()=>setCountry(country)} />
      <Button  style={{alignSelf:'flex-end'}} title="Get" onPress={() => checkNews(country)} /></View> 
        <ResultsList result={result} title='sports'/>
        <ResultsList result={result} title='politics'/>
        <ResultsList result={result} title='bollywood'/>
    
      </View>
  );
};

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        flexDirection:'column',
        flexWrap:'wrap'
    },
    searchNews:{
        flexDirection:'row',
    },
})

export default SearchScreen;

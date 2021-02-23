import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const ResultsDetails = ({result}) => {
  return (
    <View style={styles.viewStyle}>
      <Image style={styles.image} source={{uri: result.urlToImage}} />
      <View style={styles.description}>
        <Text style={styles.source}>{result.source.name}</Text>
        <Text>{result.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 120,
    borderRadius: 4,
  },
  source: {
    fontWeight: 'bold',
  },
  viewStyle: {
    flexDirection: 'row',
    borderWidth:1,
    margin:5,
    borderColor:'black',
  },
  description:{
      flexDirection:'column',
  }
});

export default ResultsDetails;

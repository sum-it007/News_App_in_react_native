import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetails from './ResultsDetails'

const ResultsList = ({title, result}) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
      scrollEnabled
        data={result}
        keyExtractor={(result) => result.title}
        renderItem={({item}) => {
          return <ResultsDetails result={item}/>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultsList;

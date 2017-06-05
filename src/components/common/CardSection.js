import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerCard, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerCard: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    borderColor: '#DDD',
    position: 'relative'
  }
};

export {CardSection};

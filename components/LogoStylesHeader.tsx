import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LogoStylesHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logo Styles</Text>
    </View>
  );
};

export default LogoStylesHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 25,
    marginTop: 24,
    marginBottom: 8,
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: 'Manrope_800ExtraBold',
    fontSize: 20,
    lineHeight: 25,
    color: '#FAFAFA',
    textAlign: 'left',
  },
});

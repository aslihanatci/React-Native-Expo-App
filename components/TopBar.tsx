// components/TopBar.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopBar = () => {
  return (
<View style={styles.topBar}>
  <View style={styles.logoWrapper}>
    <Text style={styles.logoText}>Al Logo</Text>
  </View>
</View>

  );
};

export default TopBar;

const styles = StyleSheet.create({
    topBar: {
      width: '100%',
      height: 60,
      paddingVertical: 12,
      paddingHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'center', 
      alignItems: 'center',
    },
    logoWrapper: {
      width: 61,
      height: 22,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoText: {
      color: '#FAFAFA',
      fontSize: 17,
      lineHeight: 22,
      letterSpacing: -1,
      fontWeight: '800', // Şimdilik fontFamily yerine bu
      // fontFamily: 'Manrope-ExtraBold', // Eğer font yüklenirse bu açılır
    },
  });
  

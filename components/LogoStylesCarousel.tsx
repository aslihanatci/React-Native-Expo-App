import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import LogoStyleCard from './LogoStyleCard';

const logoStyles = [
  { title: 'No Style', image: require('../assets/logo-styles/no-style.png') },
  { title: 'Monogram', image: require('../assets/logo-styles/Monogram.png') },
  { title: 'Abstract', image: require('../assets/logo-styles/Abstract.png') },
  { title: 'Mascot', image: require('../assets/logo-styles/Mascot.png') },
];

const LogoStylesCarousel = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={logoStyles}
        horizontal
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <LogoStyleCard image={item.image} title={item.title} />
        )}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default LogoStylesCarousel;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 8,
  },
});

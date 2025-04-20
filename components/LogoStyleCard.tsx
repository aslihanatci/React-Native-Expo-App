import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface LogoStyleCardProps {
  image: any;
  title: string;
}

const LogoStyleCard: React.FC<LogoStyleCardProps> = ({ image, title }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={styles.caption}>{title}</Text>
    </View>
  );
};

export default LogoStyleCard;

const styles = StyleSheet.create({
  card: {
    width: 90,
    height: 114,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 6,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 13.71,
  },
  caption: {
    width: 90,
    fontFamily: 'Manrope_400Regular',
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
    color: '#71717A',
  },
});

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface LogoStyleCardProps {
  image: any;
  title: string;
  isSelected: boolean;
  onPress: () => void;
}

const LogoStyleCard: React.FC<LogoStyleCardProps> = ({ image, title, isSelected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={[styles.imageWrapper, isSelected && styles.selectedImageWrapper]}>
        <Image source={image} style={styles.image} resizeMode="cover" />
      </View>
      <Text style={styles.caption}>{title}</Text>
    </TouchableOpacity>
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
  imageWrapper: {
    width: 90,
    height: 90,
    borderRadius: 13.71,
    overflow: 'hidden',
    backgroundColor: '#1E1E1E',
  },
  selectedImageWrapper: {
    borderWidth: 3,
    borderColor: '#943DFF',
    shadowColor: '#943DFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  image: {
    width: '100%',
    height: '100%',
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

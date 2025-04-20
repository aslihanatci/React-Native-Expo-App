import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const CreateButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
    <LinearGradient
        colors={['#943DFF', '#2938DC']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={styles.button}
    >
      <Text style={styles.text}>Create</Text>
      <Icon name="sparkles-sharp" size={20} color="#FAFAFA" />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CreateButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 342,
    height: 56,
    paddingVertical: 12,
    paddingHorizontal: 24,
    gap: 8,
    borderRadius: 50,
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(270deg, #943DFF 24.59%, #2938DC 100%)', // RN'de desteklenmediği için alternatif aşağıda
  },
  text: {
    fontFamily: 'Manrope_800ExtraBold',
    fontSize: 17,
    lineHeight: 22,
    color: '#FAFAFA',
    textAlign: 'center',
  },
});

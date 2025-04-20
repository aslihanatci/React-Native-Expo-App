import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Clipboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';


const OutputScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { prompt, logoStyle, logoImage } = route.params as {
    prompt: string;
    logoStyle: string;
    logoImage: any;
  };
  const handleCopy = () => {
    Clipboard.setString(prompt);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.tabbar}>
        <Text style={styles.designText}>Your Design</Text>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={20} color="#FAFAFA" />
        </TouchableOpacity>
      </View>

     
      <View style={styles.imageContainer}>
        <Image
          source={logoImage}
          style={styles.logoImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoHeader}>
          <Text style={styles.promptLabel}>Prompt</Text>
          <TouchableOpacity style={styles.copyContainer} onPress={handleCopy}>
            <Ionicons name="copy-outline" size={16} color="#A1A1AA" />
            <Text style={styles.copyText}>Copy</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.promptContent}>{prompt}</Text>

        <View style={styles.styleChip}>
          <Text style={styles.styleChipText}>{logoStyle}</Text>
        </View>
      </View>
    </View>
  );
};

export default OutputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // ya da genel background
    alignItems: 'center',
    paddingTop: 40,
  },
  tabbar: {
    width: '90%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
  },
  designText: {
    width: 129,
    height: 28,
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 22,
    lineHeight: 28,
    color: '#FAFAFA',
    textAlign: 'center',
  },
  cancelButton: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '90%',
    height: 342,
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 12,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    width: '90%',
    height: 134,
    borderRadius: 12,
    padding: 12,
    marginTop: 30,
    backgroundColor: '#27272A',
  },
  infoHeader: {
    width: 318,
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  promptLabel: {
    fontFamily: 'Manrope-Bold',
    fontSize: 15,
    lineHeight: 20,
    color: '#FAFAFA',
  },
  copyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  copyText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 11,
    lineHeight: 13,
    color: '#A1A1AA',
  },
  promptContent: {
    width: 318,
    height: 42,
    fontFamily: 'Manrope-Regular',
    fontSize: 16,
    lineHeight: 21,
    color: '#FAFAFA',
    marginTop: 8,
  },
  styleChip: {
    marginTop: 8,
    width: 76,
    height: 24,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 50,
    backgroundColor: '#FAFAFA1A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleChipText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 12,
    lineHeight: 16,
    color: '#FAFAFA',
  },
});

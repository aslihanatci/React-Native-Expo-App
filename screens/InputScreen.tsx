import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import TopBar from '../components/TopBar';
import PromptEntry from '../components/PromptEntry';
import GradientBackground from '../components/GradientBackground';
import LogoStylesHeader from '../components/LogoStylesHeader';
import LogoStylesCarousel from '../components/LogoStylesCarousel';
import CreateButton from '../components/CreateButton';
import StatusChip from '../components/StatusChip';

export default function InputScreen({ navigation }: any) {
    const [prompt, setPrompt] = useState(''); 
    const [selectedStyle, setSelectedStyle] = useState('No Style');
    const [status, setStatus] = useState<'processing' | 'done' | 'error' | null>(null);

    const handleSubmit = () => {
        setStatus('processing');
    
        const randomDelay = Math.floor(Math.random() * 30000) + 30000; 
    
        setTimeout(() => {
          setStatus('done');
        }, randomDelay);
      };


  const handleChipPress = () => {
    if (status === 'done') {
      navigation.navigate('OutputScreen', {
        prompt,
        selectedStyle,
      });
    }
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <TopBar />         
          <View style={styles.innerContent}>
            {status && (
              <StatusChip status={status} onPress={handleChipPress} />
            )}
            <PromptEntry value={prompt} onChangeText={setPrompt}       />
            <LogoStylesHeader />
            <LogoStylesCarousel
            selectedStyle={selectedStyle}
            onSelectStyle={setSelectedStyle}
      />
          </View>
        </ScrollView>
        {!status && (
        <View style={styles.createButtonWrapper}>
          <CreateButton onPress={handleSubmit} />
        </View>
        )}
      </SafeAreaView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 100, 
  },
  innerContent: {
    flexGrow: 1,
  },
  createButtonWrapper: {
    position: 'absolute',
    bottom: 50,
    left: 16,
    right: 16,
    alignItems: 'center',
  },
});

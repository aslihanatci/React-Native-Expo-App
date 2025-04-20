import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import TopBar from '../components/TopBar';
import PromptEntry from '../components/PromptEntry';
import GradientBackground from '../components/GradientBackground';
import LogoStylesHeader from '../components/LogoStylesHeader';
import LogoStylesCarousel from '../components/LogoStylesCarousel';
import CreateButton from '../components/CreateButton';
import StatusChip from '../components/StatusChip';
import { db } from '../firebase/firebase'; 
import { collection, addDoc } from 'firebase/firestore';

export default function InputScreen({ navigation }: any) {
    const [prompt, setPrompt] = useState(''); 
    const [selectedStyle, setSelectedStyle] = useState('No Style');
    const [status, setStatus] = useState<'processing' | 'done' | 'error' | null>(null);
    const [delaySeconds, setDelaySeconds] = useState(0);

        const handleSubmit = async () => {
            try {
            setStatus('processing');
              await addDoc(collection(db, 'generatedLogos'), {
                prompt: prompt,
                selectedStyle: selectedStyle, 
                createdAt: new Date(),
              });
              const randomDelay = Math.floor(Math.random() * 30000) + 30000; 
              setDelaySeconds(randomDelay);
          
              setTimeout(() => {
                setStatus('done');
              }, randomDelay);
            } catch (error) {
                setStatus('error');
            }
          };



  const handleChipPress = () => {
    if (status === 'done') {
      navigation.navigate('Output', {
        prompt: prompt,
        logoStyle: selectedStyle,
        logoImage: require('../assets/output-logo.jpeg')
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
              <StatusChip status={status} onPress={handleChipPress} delaySeconds={delaySeconds}/>
            )}
            <PromptEntry value={prompt} onChangeText={setPrompt}       />
            <LogoStylesHeader />
            <LogoStylesCarousel
            selectedStyle={selectedStyle}
            onSelectStyle={setSelectedStyle}
      />
          </View>
        </ScrollView>
        {status !== "processing" && (
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

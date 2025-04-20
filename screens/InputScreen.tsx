import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import TopBar from '../components/TopBar';
import PromptEntry from '../components/PromptEntry';
import GradientBackground from '../components/GradientBackground';
import LogoStylesHeader from '../components/LogoStylesHeader';
import LogoStylesCarousel from '../components/LogoStylesCarousel';
import CreateButton from '../components/CreateButton';

export default function InputScreen({ navigation }: any) {
  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <TopBar />
          <View style={styles.innerContent}>
            <PromptEntry />
            <LogoStylesHeader />
            <LogoStylesCarousel />
          </View>
        </ScrollView>

        <View style={styles.createButtonWrapper}>
          <CreateButton onPress={() => console.log('Create pressed')} />
        </View>
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
